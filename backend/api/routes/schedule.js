const https = require('https');
const AppointmentModel = require('../models/AppointmentModel');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});
const scheduleConfig = require('./scheduleConfig');
// const req = require('request');

module.exports = function (router) {
  router.post('/bookTime', function (req, response) {
    let form = req.body.data;
    let appointment = new AppointmentModel({
      fullName: form.name,
      email: form.email,
      date: form.date,
      timeslot: form.timeslot,
      details: {
        chemistry: form.chemistry,
        sampleNumber: form.sampleNumber,
      },
    });
    appointment.save(function (err) {
      if (err) {
        console.log(err);
        return response.status(500).json('Appointment could not be saved.');
      }
      return response.status(200).json('Appointment saved.');
    });
  });
};

module.exports = function (router) {
  router.get('/availableSlots/:weekday/:date', function (req, response) {
    // for this day, which slots are taken if any
    console.log(req.params);
    console.log(scheduleConfig);
    let weekday = req.params.weekday;
    let date = req.params.date;
    let defaultSlots = scheduleConfig[weekday];
    // select from mongo this date
    // empty just send all slots
    let appointments = AppointmentModel.find({ date: date })
      .lean()
      .exec(function (err, submissions) {
        if (err) {
          // logger.error('Error pulling submissions from mongoDB');
          // return apiResponse.errorResponse(res, 'Could not retrieve submissions.');
        }
        console.log(appointments);
        if (!appointments) return response.status(200).json(defaultSlots);

        // return apiResponse.successResponseWithData(res, 'Operation success', {
        //     submissions,
        // });
      });
  });
};
