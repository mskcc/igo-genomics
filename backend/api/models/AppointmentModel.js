var mongoose = require('mongoose');

// createdAt and updatedAt respond to loginFirst and loginLatest
var AppointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    notificationDate: { type: String, required: true },
    dateTime: { type: String, required: true }, // month day, year hh:mm
    // startTime: { type: Number, required: true },  remove?
    emailTime: { type: String, required: true },
    requestType: { type: String, required: true },
    status: { type: String, required: true },
    details: { type: Object, required: true }, // [ {cellNumber: 6, chemistry: ''} ]
  },
  { timestamps: true }
);

// AppointmentSchema.index({ email: 1, date: 1, startTime: 1 }, { unique: true });
AppointmentSchema.index(
  { email: 1, date: 1, dateTime: 1, requestType: 1 },
  { unique: true }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);
