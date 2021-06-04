var mongoose = require('mongoose');

// createdAt and updatedAt respond to loginFirst and loginLatest
var FeedbackSchema = new mongoose.Schema(
  {
    application: { type: String, required: true },
    opinionRating: { type: Number, required: true },
    feedbackCategory: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', FeedbackSchema);
