var mongoose = require('mongoose');

var InquirySchema = new mongoose.Schema(
  {
    contactInfo: { type: Object, required: true },
    body: { type: Object, required: true }, // [ {cellNumber: 6, chemistry: ''} ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', InquirySchema);
