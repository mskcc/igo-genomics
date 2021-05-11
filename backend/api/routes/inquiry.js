// var mongoose = require('mongoose');
const InquiryModel = require('../models/InquiryModel');
const mailer = require('../util/mailer');

module.exports = function (router) {
  router.post('/submitInquiry', function (request, response) {
    let form = request.body.data;

    let inquiry = new InquiryModel({
      contactInfo: form.contactInfo,
      body: form.body,
    });

    inquiry.save(function (err, doc) {
      if (err) {
        console.log(err);
        return response
          .status(500)
          .json({ message: 'Your message could not be saved.' });
      }
      // send email
      mailer.sendInquiryNotification(inquiry);
      return response.status(200).json({
        message:
          'Thank you for your message. We will get back to you as soon as possible',
      });
    });
  });
};
