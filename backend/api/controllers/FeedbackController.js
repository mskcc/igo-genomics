const apiResponse = require('../helpers/apiResponse');
const FeedbackModel = require('../models/FeedbackModel');

const columns = [
  { columnHeader: 'Created', data: 'createdAt' },
  { columnHeader: 'Opinion Rating', data: 'opinionRating' },
  { columnHeader: 'Feedback Category', data: 'feedbackCategory' },
  { columnHeader: 'Description', data: 'description' },
];

exports.allFeedback = [
  function (request, response) {
    let headers = [];
    columns.forEach((column) => {
      headers.push(column.columnHeader);
    });
    let result = { columnDefinitions: columns, columnHeaders: headers };
    FeedbackModel.find({}, function (err, docs) {
      if (err) {
        return apiResponse.errorResponse(
          response,
          'Error retrieving feedback.'
        );
      } else {
        result.data = docs;
        return apiResponse.successResponseWithData(
          response,
          'Operation success',
          result
        );
      }
    });
  },
];

exports.feedback = [
  function (request, response) {
    let form = request.body.data;
    let feedback = new FeedbackModel({
      application: form.application,
      opinionRating: form.opinionRating,
      feedbackCategory: form.feedbackCategory,
      description: form.description,
    });

    feedback.save(function (err) {
      if (err) {
        return apiResponse.errorResponse(response, 'We encountered an error.');
      } else {
        return apiResponse.successResponse(
          response,
          'We appreciate your feedback!'
        );
      }
    });
  },
];
