const nodemailer = require('nodemailer');

// const { logger } = require('../util/winston');
// const { emailConfig } = require('./constants');

const emailConfig = {
  notificationSender: 'igoski@mskcc.org',
  notificationRecipients:
    'wagnerl@mskcc.org, patrunoa@mskcc.org, lisa.wagner91@gmail.com',
  subject: '[IGO Booking] ',
  footer:
    '<br><br><br>Thank you, <br><br><a href="http://cmo.mskcc.org/cmo/igo/">Integrated Genomics Operation</a><br><a href="https://www.mskcc.org">Memorial Sloan Kettering Cancer Center</a><br>T 646.888.3765<br>Follow us on <a href="https://www.instagram.com/genomics212/?hl=en">Instagram</a> and <a href="https://twitter.com/genomics212?lang=en">Twitter</a>!<br>',
  //   recipients: 'zzPDL_SKI_IGO_Pathextraction@mskcc.org, zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org',
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  port: 25,
  host: 'localhost',
  tls: {
    rejectUnauthorized: false,
  },
  //secure: process.env.EMAIL_SMTP_SECURE, // lack of ssl commented this. You can uncomment it.
  // auth: {
  // 	user: process.env.EMAIL_SMTP_USERNAME,
  // 	pass: process.env.EMAIL_SMTP_PASSWORD
  // }
});

exports.sendBookingNotification = function (appointment, appointmentIcal) {
  let recipients = [emailConfig.notificationRecipients, appointment.email];
  let cancellationLink = `${process.env.API_ROOT}/cancelAppointment/${appointment._id}`;

  let email = {
    subject: `${emailConfig.subject} Drop-off samples at: ${appointment.emailTime} on ${appointment.date} `,
    content: `You booked a 10x processing on ${appointment.date}. Your drop-off time is ${appointment.emailTime}.  You can cancel this appointment by clicking on: ${cancellationLink} 
    \n If you have any questions, please reach out to zzPDL_SKI_IGO_Pathextraction@mskcc.org.`,
    footer: emailConfig.footer,
  };
  //   logger.log('info', `${email} sent to recipients.`);
  transporter
    .sendMail({
      from: emailConfig.notificationSender, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
      to: recipients.join(','), // list of receivers e.g. bar@example.com, baz@example.com
      subject: email.subject, // Subject line e.g. 'Hello ✔'
      html: email.content + email.footer, // html body e.g. '<b>Hello world?</b>'
      //text: text, // plain text body e.g. Hello world?
      icalEvent: {
        filename: '10xBooking.ics',
        method: 'request',
        content: appointmentIcal
    }
    })
    // .then((result) => console.log(result))
    .catch((error) => console.log(error));
};


exports.sendCancellationNotification = function (appointment) {
    let recipients = [emailConfig.notificationRecipients, appointment.email];
    
    let email = {
      subject: `${emailConfig.subject} Cancelled ${appointment.emailTime} on ${appointment.date} `,
      content: `Appointment on ${appointment.date}, ${appointment.emailTime} is cancelled.
      \n If you have any questions, please reach out to zzPDL_SKI_IGO_Pathextraction@mskcc.org.`,
      footer: emailConfig.footer,
    };
    //   logger.log('info', `${email} sent to recipients.`);
    transporter
      .sendMail({
        from: emailConfig.notificationSender, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
        to: recipients.join(','), // list of receivers e.g. bar@example.com, baz@example.com
        subject: email.subject, // Subject line e.g. 'Hello ✔'
        html: email.content + email.footer, // html body e.g. '<b>Hello world?</b>'
        //text: text, // plain text body e.g. Hello world?
      })
      // .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  