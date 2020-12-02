const axios = require('axios');
const https = require('https');
// LIMS is authorized. Avoids certificate verification & "unable to verify the first certificate in nodejs" errors
const agent = new https.Agent({
  rejectUnauthorized: false,
});
// const req = require('request');

const LIMS_AUTH = {
  username: process.env.LIMS_USER,
  password: process.env.LIMS_PASSWORD,
};
const LIMS_URL = process.env.LIMS_URL;

module.exports = function (router) {
  router.get('/getAssayFromLims', function (req, response) {
    axios
      .get(LIMS_URL + '/getDdpcrAssays', {
        auth: { ...LIMS_AUTH },
        httpsAgent: agent,
      })
      .then((limsResponse) => {
        let limsAssays = limsResponse.data.assays;
        // only send assays that are not hidden
        let unhiddenAssays = [];
        limsAssays.forEach((limsAssay) => {
          if (!limsAssay.hideFromUser) {
            unhiddenAssays.push(limsAssay);
          }
        });
        response.status(200).json(unhiddenAssays);
      })
      .catch((error) => {
        console.log(error);
        response
          .status(500)
          .json({ message: 'Error retrieving assays from the LIMS' });
      });
  });
};
