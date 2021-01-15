const https = require('https');
const _ = require('lodash');
const ical = require('ical-generator');

const moment = require( 'moment');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const helpers = require('../util/helpers');
const mailer = require('../util/mailer');

const scheduleConfig = require('../util/scheduleConfig');
const AppointmentModel = require('../models/AppointmentModel');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});

module.exports = function (router) {
  router.post('/bookTime', function (req, response) {
    let form = req.body.data;
    let appointment = new AppointmentModel({
      fullName: form.name,
      email: form.email,
      date: form.date,
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
          summary: '10x Sample Dropoff',
          location: 'ZRC 320',
          description: "Please don't be late.",
          organizer:
            'zzPDL_SKI_IGO_Pathextrdasdadaaction <zzPDL_SKI_IGO_Pathextdasdadaraction@mskcc.org>',
        },
      ],
    }).toString();

    // let string = cal.toString()
    // console.log(invite);
    // mailer.sendBookingNotification(appointment, invite);
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

      mailer.sendBookingNotification(appointment, invite);
      return response.status(200).json({
        message:
          'Appointment saved! Please check for a confirmation email and remember to call 646-888-3765 before sample dropoff.',
      });
    });
  });

  router.get('/availableSlots/:weekday/:date', function (req, response) {
    // for this day, which slots are taken if any
    // returns hour range for that day, defaults in scheduleConfig.js
    let weekday = req.params.weekday;
    let date = req.params.date;
    let defaultHourRange = scheduleConfig[weekday];
    // select from mongo this date
    // empty just send all slots
    AppointmentModel.find({ date: date })
      .lean()
      .exec(function (err, appointments) {
        if (err) {
          return response
            .status(500)
            .json({ message: 'Backend encountered a fatal error.' });
        }

        if (_.isEmpty(appointments)) {
          if (_.isEmpty(defaultHourRange)) {
            return response.status(200).json({
              hourRange: [],
            });
          } else {
            return response.status(200).json({
              hourRange: defaultHourRange.filter((element) => element <= 18),
            });
          }
        }
        // if appointments exist on this date:  for every startTime on that day, run getAvailableTimes
        let range = defaultHourRange;
        appointments.forEach((appointment) => {
          range = helpers.getAvailableHours(appointment.startTime, range);
        });

        if (_.isEmpty(range)) {
          return response.status(204).send();
        }
        return response.status(200).json({
          hourRange: range,
        });

        // Appointments exist on this date, adjust hourRange accordingly
        // Grab all start times and use them as input for
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
