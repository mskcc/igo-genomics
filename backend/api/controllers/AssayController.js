// const axios = require('axios');
// const https = require('https');

const apiResponse = require('../helpers/apiResponse');
const services = require('../services/services');

exports.ddpcrAssays = [
  function (request, response) {
    let limsPromise = services.getAssays();
    limsPromise
      .then((result) => {
        let assays = result.assays;
        let unhiddenAssays = [];
        assays.forEach((assay) => {
          if (!assay.hideFromUser) {
            unhiddenAssays.push(assay);
          }
        });
        return apiResponse.successResponseWithData(
          response,
          'Operation success',
          unhiddenAssays
        );
      })
      .catch((error) => {
        console.log(error);
        return apiResponse.errorResponse(
          response,
          'Could not retrieve picklists from LIMS.'
        );
      });
  },
];
