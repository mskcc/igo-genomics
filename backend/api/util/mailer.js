const nodemailer = require('nodemailer');

// const { logger } = require('../util/winston');
// const { emailConfig } = require('./constants');

const emailConfig = {
  notificationSender: 'igoski@mskcc.org',
  notificationRecipients: {
    '10xGenomics':
      'wuy4@mskcc.org,clarkej1@mskcc.org,zzPDL_SKI_IGO_NA@mskcc.org,zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org,zzpdl_ski_igo_data@mskcc.org',
    atacSeq:
      'zzPDL_SKI_IGO_NA@mskcc.org,zzPDL_SKI_IGO_Sample_and_Project_Management@mskcc.org,zzpdl_ski_igo_data@mskcc.org',
  },
  subject: '[IGO Reservation] ',
  footer:
    '<br><br><br>Thank you, <br><br><a href="https://genomics.mskcc.org/">Integrated Genomics Operation</a><br><a href="https://www.mskcc.org">Memorial Sloan Kettering Cancer Center</a><br>T (646) 888-3856<br>Follow us on <a href="https://www.instagram.com/genomics212/?hl=en">Instagram</a> and <a href="https://twitter.com/genomics212?lang=en">Twitter</a>!<br>',
};

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  port: 25,
  host: 'localhost',
  tls: {
    rejectUnauthorized: false,
  },
  // secure: process.env.EMAIL_SMTP_SECURE, // lack of ssl commented this. You can uncomment it.
  // auth: {
  // 	user: process.env.EMAIL_SMTP_USERNAME,
  // 	pass: process.env.EMAIL_SMTP_PASSWORD
  // }
});

exports.sendBookingNotification = function (appointment, appointmentIcal) {
  let recipients;
  let subject;
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  };
  let date = new Date(appointment.dateTime).toLocaleDateString(
    'en-US',
    options
  );

  if (process.env.ENV === 'development') {
    recipients = [
      'patrunoa@mskcc.org,apatruno618@gmail.com',
      appointment.email,
    ];
    // subject = `[IGO Reservation TEST] Drop-off samples at: ${appointment.emailTime} on ${appointment.notificationDate}`;
    subject = `[IGO Reservation TEST] Drop-off samples on: ${date}`;
  } else {
    recipients = [
      emailConfig.notificationRecipients[appointment.requestType],
      appointment.email,
    ];
    subject = `${emailConfig.subject} Drop-off samples at: ${appointment.emailTime} on ${appointment.notificationDate}`;
  }

  let cancellationLink = `${process.env.API_ROOT}/reservations/cancel/${appointment._id}`;

  let email = {
    subject: subject,
    content: `Hello<br><br>Your ${appointment.requestType} reservation is ${
      appointment.status
    }. Please call (646) 888-3856 before dropping off your samples. Cancellations can be made no less than 2 hours before your drop off time.<br><br>Appointment type: <strong>${
      appointment.requestType
    }</strong><br>Date: <strong>${date}</strong><br>Number of samples: <strong>${
      appointment.details.sampleNumber
    } samples</strong><br><br>You can cancel this appointment by clicking on: ${cancellationLink}<br>If you have any questions, please reach out to ${
      emailConfig.notificationRecipients[appointment.requestType]
    }.`,
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
      // TODO commented until we learn how to send iCal files through the MSK mailer
      //   icalEvent: {
      //     filename: '10xBooking.ics',
      //     method: 'request',
      //     content: appointmentIcal
      // }
    })
    // .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

exports.sendCancellationNotification = function (appointment) {
  let recipients;
  let subject;
  if (process.env.ENV === 'development') {
    recipients = [
      'patrunoa@mskcc.org,apatruno618@gmail.com',
      appointment.email,
    ];
    subject = `[IGO Reservation TEST] ${appointment.requestType} Reservation Cancelled`;
  } else {
    recipients = [
      emailConfig.notificationRecipients[appointment.requestType],
      appointment.email,
    ];
    subject = `${emailConfig.subject} Cancelled ${appointment.emailTime} on ${appointment.notificationDate} `;
  }

  let email = {
    subject: subject,
    content: `Appointment on ${appointment.notificationDate}, ${
      appointment.emailTime
    } is cancelled.<br>If you have any questions, please reach out to ${
      emailConfig.notificationRecipients[appointment.requestType]
    } `,
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

exports.sendInquiryNotification = function (inquiry) {
  let recipients = ['genomics@mskcc.org', inquiry.contactInfo.email];
  let subject = '[PRICING INQUIRY] ';

  let email = {
    recipients: recipients,
    subject: subject,
    content: `Hello<br><br>
    ${inquiry.contactInfo.name} is requesting a quote for <strong>${inquiry.body.runLength}</strong> for <strong>${inquiry.body.totalReads} M reads</strong>.<br><strong>Project Description: </strong>${inquiry.body.projectDescription}`,
    footer: emailConfig.footer,
  };

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
