const _ = require('lodash');
const helpers = require('../util/helpers');

module.exports = function (router) {
  router.get('/chemistryTimeline', function (req, response) {
    return response.status(200).json({
      columns: helpers.last12Months(),
    });
  });
};
