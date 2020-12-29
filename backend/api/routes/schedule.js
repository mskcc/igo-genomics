const https = require('https');
const _ = require('lodash');
const util = require('./util');
const AppointmentModel = require('../models/AppointmentModel');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const scheduleConfig = require('./scheduleConfig');

module.exports = function (router) {
  router.post('/bookTime', function (req, response) {
    let form = req.body.data;
    let appointment = new AppointmentModel({
      fullName: form.name,
      email: form.email,
      date: form.date,
      startTime: form.time.militaryTime,
      details: {
        chemistry: form.chemistry,
        sampleNumber: form.sampleNumber,
      },
    });
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
      return response.status(200).json({
        message: 'Appointment saved! Please check for a confirmation email.',
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
          return response.status(200).json({
            hourRange: defaultHourRange.filter((element) => element <= 18),
          });
        }
        // if appointments exist on this date:  for every startTime on that day, run getAvailableTimes
        let range = defaultHourRange;
        appointments.forEach((appointment) => {
          range = util.getAvailableHours(appointment.startTime, range);
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
};
