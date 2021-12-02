const express = require('express');
// const app = express();

const router = express.Router();
const AssayController = require('../controllers/AssayController.js');
const ChemistryController = require('../controllers/ChemistryController.js');
const FeedbackController = require('../controllers/FeedbackController.js');
const InquiryController = require('../controllers/InquiryController.js');
const ScheduleController = require('../controllers/ScheduleController.js');

router.get('/ddpcrAssays', AssayController.ddpcrAssays);
router.get('/chemistryTimeline', ChemistryController.chemistryTimeline);
router.get('/allFeedback', FeedbackController.allFeedback);
router.post('/feedback', FeedbackController.feedback);
router.post('/inquiry', InquiryController.inquiry);

router.post('/bookTime', ScheduleController.bookTime)
router.get('/existingAppointments/:requestType', ScheduleController.existingAppointments)
router.post('/cancelAppointment/:id', ScheduleController.cancelAppointment)
router.get('/appointment/:id', ScheduleController.appointment)
router.get('/allAppointments', ScheduleController.allAppointments)
router.get('/updateAppointments', ScheduleController.updateAppointments)
router.get('/availableSlots/:requestType/:weekday/:date', ScheduleController.availableSlots)


module.exports = router;

// require('./schedule')(router);
