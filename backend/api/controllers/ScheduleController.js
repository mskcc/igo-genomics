const https = require('https');
const _ = require('lodash');
const ical = require('ical-generator');

const moment = require('moment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const helpers = require('../util/helpers');
const mailer = require('../util/mailer');

const scheduleConfig = require('../util/scheduleConfig');
const AppointmentModel = require('../models/AppointmentModel');
const { time } = require('console');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const apiResponse = require('../util/apiResponse');

exports.bookTime = [
  function (req, response) {
    let form = req.body.data;

    let appointment = new AppointmentModel({
      fullName: form.name,
      email: form.email,
      date: form.date,
      notificationDate: form.notificationDate,
      requestType: form.requestType,
      startTime: form.time.militaryTime,
      // emailTime: `${form.time.h}${form.time.A}`,
      emailTime: form.time.militaryTime,
      details: {
        chemistry: form.chemistry,
        sampleNumber: form.sampleNumber,
        ilabServiceId: form.ilabServiceId,
      },
      status: form.requestType === 'spm' ? 'pending' : 'confirmed',
      dateTime: `${form.date} ${form.time.militaryTime}`,
    });
    let dateAndTime = moment(`${form.date} ${form.time.militaryTime}:00`);
    let end = moment(`${form.date} ${form.time.militaryTime}:00`).add(
      30,
      'minutes'
    );

    let invite = ical({
      domain: 'genomics.mskkcc.org',
      // prodId: '//superman-industries.com//ical-generator//EN',
      events: [
        {
          // create a new event
          start: dateAndTime,
          timestamp: dateAndTime,
          end: end,
          // summary: '10x Sample Dropoff',
          summary: `${form.requestType} Sample Dropoff`,
          location: 'Schwartz 7th floor',
          description: "Please don't be late.",
          organizer:
            'zzPDL_SKI_IGO_Pathextrdasdadaaction <zzPDL_SKI_IGO_Pathextdasdadaraction@mskcc.org>',
        },
      ],
    }).toString();

    // let string = cal.toString()
    appointment.save(function (err) {
      if (err) {
        if (err.code === 11000) {
          return apiResponse.errorResponse(
            response,
            'An appointment for this email, time and date is already booked.'
          );
        }
        return apiResponse.errorResponse(
          response,
          'Appointment could not be saved.'
        );
      }

      mailer.sendBookingNotification(appointment, invite);
      return apiResponse.successResponseWithData(
        response,
        'Please check for a confirmation email and remember to call (646)888-3856 before sample dropoff.',
        appointment
      );
    });
  },
];

exports.existingAppointments = [
  function (req, response) {
    let today = new Date().setHours(0, 0, 0, 0);
    let requestType = req.params.requestType;

    AppointmentModel.find({ requestType: requestType, status: 'confirmed' })
      .sort('dateTime')
      .lean()
      .exec(function (err, appointments) {
        if (err) {
          return apiResponse.errorResponse(
            response,
            'Error retrieving existing reservations.'
          );
        }
        if (appointments) {
          let futureAppointments = [];
          appointments.forEach((appointment) => {
            let appointmentDate = new Date(`${appointment.dateTime}`).valueOf();
            if (appointmentDate >= today) {
              futureAppointments.push(appointment);
            }
          });
          return apiResponse.successResponseWithData(
            response,
            'Operation success',
            futureAppointments
          );
        }
      });
  },
];

exports.availableSlots = [
  function (req, response) {
    // returns range for given day, defaults in scheduleConfig.js
    let requestType = req.params.requestType;
    let weekday = parseInt(req.params.weekday);
    let date = req.params.date;
    let todaysDate = new Date().toLocaleDateString('en-CA', {
      timeZone: 'America/New_York',
    });
    let currentHour = new Date().getHours();

    let timeRange = [];
    let config = scheduleConfig[requestType][weekday];
    config.forEach((time) => {
      let tempObject = {
        string: time,
        float: parseFloat(time.replace(':', '.')),
      };
      timeRange.push(tempObject);
    });

    // if there are no times for that requestType on that day just return
    if (_.isEmpty(timeRange)) {
      return apiResponse.successResponse(
        response,
        'No appointments for that request type on that day.'
      );
    }
    // check for existing appointments for that day
    AppointmentModel.find({
      date: date,
      requestType: requestType,
      status: { $in: ['pending', 'confirmed'] },
    })
      .sort({ emailTime: 'asc' })
      .lean()
      .exec(function (err, appointments) {
        if (err) {
          return apiResponse.errorResponse(
            response,
            'Backend encountered a fatal error.'
          );
        }
        if (_.isEmpty(appointments)) {
          // soonest spm reservation can only be made 2 hours from now
          if (todaysDate === date && requestType === 'spm') {
            timeRange = timeRange.filter(
              (element) => element.float >= currentHour + 2
            );
          }
          if (requestType === '10xGenomics') {
            // trim hours later in day, only matters for 10x
            timeRange = timeRange.filter(
              (element) => element.float <= (weekday === 6 ? 15 : 18)
            );
            // timeRange = timeRange.filter((element) => element.float <= 18);
          }
          return apiResponse.successResponseWithData(
            response,
            'Please select a time.',
            { timeRange: timeRange }
          );
        } else {
          // atac is easy bc only have 1 time slot per Thursday
          if (requestType === 'atacSeq') {
            return apiResponse.successResponse(
              response,
              'That day is fully booked.'
            );
          } else if (requestType === 'spm') {
            appointments.forEach(
              (appointment) =>
                (timeRange = timeRange.filter(
                  (time) => time.string !== appointment.emailTime
                ))
            );
            // soonest spm reservation can only be made 2 hours from now
            if (todaysDate === date) {
              timeRange = timeRange.filter(
                (element) => element.float >= currentHour + 2
              );
            }
            return apiResponse.successResponseWithData(
              response,
              'Please select a time.',
              { timeRange: timeRange }
            );
            // 10x genomics
          } else {
            appointments.forEach((appointment) => {
              timeRange = helpers.getAvailableHours(
                appointment.dateTime,
                timeRange
              );
            });
            // that day is fully booked
            if (_.isEmpty(timeRange)) {
              return apiResponse.successResponse(
                response,
                'That day is fully booked.'
              );
            } else {
              timeRange = timeRange.filter(
                (element) => element.float <= (weekday === 6 ? 15 : 18)
              );
              return apiResponse.successResponseWithData(
                response,
                'Please select a time.',
                { timeRange: timeRange }
              );
            }
          }
        }
      });
  },
];

// cancels an appointment
exports.cancelAppointment = [
  function (req, response) {
    AppointmentModel.findById(req.params.id, function (error, doc) {
      if (error) {
        return response.status(500).json({
          message: 'Appointment not found',
        });
      }
      doc.status = 'cancelled';
      doc.save(function (err, updatedAppointment) {
        if (err) {
          console.log(err);
          return response.status(500).json({
            message: 'Appointment could not be cancelled',
          });
          return apiResponse.errorResponse();
        }
        if (updatedAppointment) {
          mailer.sendCancellationNotification(updatedAppointment);
          return response.status(200).json({
            message: 'Appointment cancelled!',
            appointment: updatedAppointment,
          });
        }
      });
    });

    // AppointmentModel.findOneAndUpdate(
    //   { _id: req.params.id },
    //   {
    //     status: 'cancelled',
    //   },
    //   { new: true },
    //   function (error, appointment) {
    //     // not a valid id
    //     if (error) {
    //       console.log(error);
    //       return response.status(500).json({
    //         message: 'Appointment not found',
    //       });
    //     }
    //     if (appointment) {
    //       mailer.sendCancellationNotification(appointment);
    //       return response
    //         .status(200)
    //         .json({ message: 'Appointment cancelled!' });
    //     }
    //     // no appointment was found
    //     // return response.status(500).json({
    //     //   message: 'Appointment not found',
    //     // });
    //   }
    // );
  },
];

exports.appointment = [
  function (req, response) {
    let appointmentId = req.params.id;

    AppointmentModel.findById(appointmentId, function (error, appointment) {
      // not a valid id
      if (error) {
        return apiResponse.errorResponse(response, 'Appointment not found');
      }
      if (appointment) {
        return apiResponse.successResponseWithData(
          response,
          'Operation success',
          { appointment: appointment }
        );
      }
      // no appointment was found
      return apiResponse.errorResponse(response, 'Appointment not found');
    });
  },
];

exports.allAppointments = [
  function (req, response) {
    AppointmentModel.find({}, function (err, docs) {
      if (err) {
        return apiResponse.errorResponse(
          response,
          'Backend is experiencing an error'
        );
      }
      if (docs) {
        return apiResponse.successResponseWithData(
          response,
          'Operation success',
          { appointments: docs }
        );
      }
    });
  },
];

// updates previously made appointments, to be used by Anna when spm reservation feature is deployed
exports.updateAppointments = [
  function (req, response) {
    AppointmentModel.find({}, function (err, docs) {
      if (err) {
        console.log(err);
        return apiResponse.errorResponse(response, 'No Appointments found');
      } else {
        // convert emailtime to 24hr and set datetime, status
        docs.forEach((doc) => {
          let time = parseInt(doc.emailTime);
          time < 10 ? (time = time + 12) : time;
          // let options = {
          //   // otherwise will subtract a day
          //   timeZone: 'UTC',
          //   year: 'numeric',
          //   month: 'long',
          //   day: 'numeric',
          // };
          // let date = new Date(doc.date).toLocaleDateString('en-US', options);
          // console.log(
          //   doc.date,
          //   doc.emailTime,
          //   'should change to:',
          //   `${date} ${time}:00`
          // );

          AppointmentModel.findByIdAndUpdate(
            doc._id,
            {
              emailTime: `${time}:00`,
              dateTime: `${doc.date} ${time}:00`,
              status: 'confirmed',
            },
            { new: true },
            function (err, appointment) {
              if (err) {
                console.log(err);
                return apiResponse.errorResponse(
                  response,
                  'Cannot find appointment'
                );
              } else {
                console.log(appointment);
              }
            }
          );
        });
      }
    });
  },
];
