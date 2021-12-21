var mongoose = require('mongoose');

// createdAt and updatedAt respond to loginFirst and loginLatest
var CustomConstructSchema = new mongoose.Schema(
  {
    contactInfo: { type: Object, required: true },
    body: { type: Object, required: true }, // [ {cellNumber: 6, chemistry: ''} ]
    files: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('CustomConstruct', CustomConstructSchema);
