const FeedbackModel = require('../models/FeedbackModel');

module.exports = function (router) {
  router.post('/submitFeedback', function (request, response) {
    let feedback = new FeedbackModel({ details: request.body.data });

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
};
