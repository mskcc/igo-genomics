var mongoose = require('mongoose');

// createdAt and updatedAt respond to loginFirst and loginLatest
var FeedbackSchema = new mongoose.Schema(
  {
    details: { type: Object, required: true }, // [ {cellNumber: 6, chemistry: ''} ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', FeedbackSchema);
