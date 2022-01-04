const apiResponse = require('../util/apiResponse');
const CustomConstruct = require('../models/CustomConstructModel');
const multer = require('multer');

// upload referenced in https://www.positronx.io/vue-js-express-single-multiple-files-and-images-upload/
// Multer is not storing the file in binary format. It just removes the extension and randomize the filename to avoid conflicts. If you would just append the right extension, you've got your file.
const MAX_SIZE = 250000;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'doc',
      'docx',
      'xls',
      'xlsx',
      'ppt',
      'pptx',
      'pdf',
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      cb(null, false);
      return cb(new Error('Unacceptable file type'));
    } else {
      cb(null, true);
    }
  },
  limits: {
    fileSize: MAX_SIZE,
  },
}).single('files');

exports.customConstruct = [
  function (request, response) {
    // upload.array('files', 2)
    upload(request, response, function (err) {
      if (err) {
        // A Multer error occurred when uploading.
        return apiResponse.errorResponse(response, err.message);
      }
      // Everything went fine.
      const reqFiles = [];
      if (request.file) {
        // const url = request.protocol + '://' + request.get('host');
        // for (var i = 0; i < request.files.length; i++) {
        //   reqFiles.push(
        //     process.env.API_ROOT + '/api/uploads/' + request.files[i].filename
        //   );
        // }
        reqFiles.push(
          process.env.API_ROOT + '/api/uploads/' + request.file.filename
        );
      }
      let form = request.body;
      const customConstruct = new CustomConstruct({
        contactInfo: {
          name: form.name,
          email: form.email,
        },
        body: {
          principalInvestigator: form.principalInvestigator,
          forwardPrimer: form.forwardPrimer,
          reversePrimer: form.reversePrimer,
          kitName: form.kitName,
          protocolDetails: form.protocolDetails,
        },
        files: reqFiles,
      });
      customConstruct.save(function (err, doc) {
        if (err) {
          console.log(err);
          return apiResponse.errorResponse(
            response,
            'Your submission could not be saved.'
          );
        }
        // send email
        //   mailer.sendInquiryNotification(inquiry);
        return apiResponse.successResponse(
          response,
          'Thank you for your message. We will get back to you as soon as possible'
        );
      });
    });
  },
];

exports.customConstructSubmissions = [
  function (request, response) {
    CustomConstruct.find({}, function (err, docs) {
      if (err) {
        return apiResponse.errorResponse(
          response,
          'Error retrieving submissions.'
        );
      } else {
        let result = {};
        result.customConstructs = docs;
        return apiResponse.successResponseWithData(
          response,
          'Operation success',
          result
        );
      }
    });
  },
];
