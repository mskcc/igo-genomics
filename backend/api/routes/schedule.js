const https = require('https');
const _ = require('lodash');
const ical = require('ical-generator');

const moment = require('moment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const helpers = require('../util/helpers');
const mailer = require('../util/mailer');

// const scheduleConfig = require('../util/scheduleConfig');
const scheduleConfig = require('../util/scheduleConfig');
const AppointmentModel = require('../models/AppointmentModel');
const { time } = require('console');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const columns = [
  { columnHeader: 'Name', data: 'fullName' },
  { columnHeader: 'Date', data: 'date' },
  { columnHeader: 'Reservation Time', data: 'emailTime' },
];

module.exports = function (router) {
  router.post('/bookTime', function (req, response) {
    let form = req.body.data;
    // console.log(form);
    let appointment = new AppointmentModel({
      fullName: form.name,
      email: form.email,
      date: form.date,
      requestType: form.requestType,
      startTime: form.time.militaryTime,
      emailTime: `${form.time.h}${form.time.A}`,
      details: {
        chemistry: form.chemistry,
        sampleNumber: form.sampleNumber,
      },
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
          location: 'ZRC 320',
          description: "Please don't be late.",
          organizer:
            'zzPDL_SKI_IGO_Pathextrdasdadaaction <zzPDL_SKI_IGO_Pathextdasdadaraction@mskcc.org>',
        },
      ],
    }).toString();

    // let string = cal.toString()
    // console.log(invite);
    mailer.sendBookingNotification(appointment, invite);
    appointment.save(function (err) {
      if (err) {
        if (err.code === 11000) {
          return response.status(409).json({
            message:
              'An appointment for this email, time and date is already booked.',
          });
        }
        return response
          .status(500)
          .json({ message: 'Appointment could not be saved.' });
      }

      // mailer.sendBookingNotification(appointment, invite);
      return response.status(200).json({
        message:
          'Appointment saved! Please check for a confirmation email and remember to call 646-888-3856 before sample dropoff.',
      });
    });
  });

  router.get('/existingAppointments/:requestType', function (req, response) {
    let today = moment().startOf('day').valueOf();
    let requestType = req.params.requestType;
    let headers = [];
    columns.forEach((column) => {
      headers.push(column.columnHeader);
    });
    let result = { columnDefinitions: columns, columnHeaders: headers };

    AppointmentModel.find({ requestType: requestType })
      .sort('date')
      .lean()
      .exec(function (err, appointments) {
        if (err) {
          return response
            .status(500)
            .json({ message: 'Error retrieving existing reservations.' });
        }
        if (appointments) {
          let futureAppointments = [];
          appointments.forEach((appointment) => {
            let appointmentDate = moment(appointment.date).valueOf();
            if (appointmentDate > today) {
              futureAppointments.push(appointment);
            }
          });
          result.data = futureAppointments;
          return response.status(200).send(result);
        }
      });
  });

  router.get('/availableSlots/:requestType/:weekday/:date', function (
    req,
    response
  ) {
    // for this day, which slots are taken if any
    // returns hour range for that day, defaults in scheduleConfig.js
    let requestType = req.params.requestType;
    let weekday = req.params.weekday;
    let date = req.params.date;

    let defaultHourRange = scheduleConfig[requestType][weekday];

    // if there are no times for that requestType on that day just return
    if (_.isEmpty(defaultHourRange)) {
      return response.status(204).send();
    }
    // check for existing appointments
    AppointmentModel.find({ date: date, requestType: requestType })
      .lean()
      .exec(function (err, appointments) {
        if (err) {
          return response
            .status(500)
            .json({ message: 'Backend encountered a fatal error.' });
        }

        if (_.isEmpty(appointments)) {
          return response.status(200).json({
            // no appointments already but trim hours later in day
            hourRange: defaultHourRange.filter((element) => element <= 18),
          });
        } else {
          // atac is easy bc only have 1 time slot per Thursday
          if (requestType === 'atacSeq') {
            return response.status(204).send();
          } else {
            // we need to filter existing appointments
            let range = defaultHourRange;

            appointments.forEach((appointment) => {
              range = helpers.getAvailableHours(appointment.startTime, range);
            });
            // that day is fully booked
            if (_.isEmpty(range)) {
              return response.status(204).send();
            } else {
              // console.log(range);
              return response.status(200).json({
                hourRange: range,
              });
            }
          }
        }
      });
  });

  //  using get because this link will be clicked from notification emails
  router.get('/cancelAppointment/:id', function (req, response) {
    let appointmentId = req.params.id;
    AppointmentModel.findByIdAndDelete(ObjectId(appointmentId)).exec(function (
      err,
      appointment
    ) {
      if (appointment) {
        mailer.sendCancellationNotification(appointment);
        return response
          .status(200)
          .send(
            '<p style=" text-align: center; font-size: larger;">Appointment cancelled!</p><p style=" text-align: center;" ><img style="width:50px; margin:auto 0;" src="https://igodev.mskcc.org/img/logoDarkGrayOnTransp.f0d9e455.png"></p>'
          );
      }
      if (err) {
        return response.status(500).json({
          message: 'Could not cancel appointment',
        });
      }
      // send cancellation email

      return response
        .status(200)
        .send(
          '<p style=" text-align: center; font-size: larger;">Appointment not found.</p><p style=" text-align: center;" ><img style="width:50px; margin:auto 0;" src="https://igodev.mskcc.org/img/logoDarkGrayOnTransp.f0d9e455.png"></p>'
        );
    });
  });
};
