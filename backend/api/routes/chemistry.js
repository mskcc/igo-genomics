const _ = require('lodash');
const helpers = require('../util/helpers');
const chemistries = require('../util/chemistries');
module.exports = function (router) {
  router.get('/chemistryTimeline', function (req, response) {
    let columns = helpers.last12Months();
    let rows = helpers.generateChemistryRows(columns, chemistries);
    // columns.unshift({ columnHeader: 'Platform', data: 'platform' });
    columns.unshift({ columnHeader: 'Chemistry', data: 'name' });
    return response.status(200).json({
      columns: columns,
      rows: rows,
    });
  });
};
