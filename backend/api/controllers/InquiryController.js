const apiResponse = require('../helpers/apiResponse');
const InquiryModel = require('../models/InquiryModel');
const mailer = require('../util/mailer');

exports.inquiry = [
  function (request, response) {
    let form = request.body.data;

    let inquiry = new InquiryModel({
      contactInfo: form.contactInfo,
      body: form.body,
    });

    inquiry.save(function (err, doc) {
      if (err) {
        console.log(err);
        return apiResponse.errorResponse(
          response,
          'Your message could not be saved.'
        );
      }
      // send email
      mailer.sendInquiryNotification(inquiry);
      return apiResponse.successResponse(
        response,
        'Thank you for your message. We will get back to you as soon as possible'
      );
    });
  },
];
