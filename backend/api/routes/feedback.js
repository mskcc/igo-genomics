const FeedbackModel = require('../models/FeedbackModel');
const columns = [
  { columnHeader: 'Created', data: 'createdAt' },
  { columnHeader: 'Opinion Rating', data: 'opinionRating' },
  { columnHeader: 'Feedback Category', data: 'feedbackCategory' },
  { columnHeader: 'Description', data: 'description' },
];

module.exports = function (router) {
  router.post('/submitFeedback', function (request, response) {
    let form = request.body.data;
    console.log(form);
    let feedback = new FeedbackModel({
      application: form.application,
      opinionRating: form.opinionRating,
      feedbackCategory: form.feedbackCategory,
      description: form.description,
    });

    feedback.save(function (err) {
      if (err) {
        return response
          .status(500)
          .json({ message: 'We encountered an error.' });
      }
      return response.status(200).json({
        message: 'We appreciate your feedback!',
      });
    });
  });

  router.get('/getFeedback', function (request, response) {
    let headers = [];
    columns.forEach((column) => {
      headers.push(column.columnHeader);
    });
    let result = { columnDefinitions: columns, columnHeaders: headers };
    FeedbackModel.find({}, function (err, docs) {
      result.data = docs;
      return response.status(200).send(result);
    });

    //   AppointmentModel.find({ requestType: requestType })
    //   .sort('date')
    //   .lean()
    //   .exec(function (err, appointments) {
    //     if (err) {
    //       return response
    //         .status(500)
    //         .json({ message: 'Error retrieving existing reservations.' });
    //     }
    //     if (appointments) {
    //       let futureAppointments = [];
    //       appointments.forEach((appointment) => {
    //         let appointmentDate = moment(appointment.date).valueOf();
    //         if (appointmentDate >= today) {
    //           futureAppointments.push(appointment);
    //         }
    //       });
    //       result.data = futureAppointments;
    //       return response.status(200).send(result);
    //     }
    //   });
  });
};
