var mongoose = require('mongoose');

// createdAt and updatedAt respond to loginFirst and loginLatest
var AppointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    timeslot: { type: String, required: true },
    details: { type: Object, required: true }, // [ {cellNumber: 6, chemistry: ''} ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);
