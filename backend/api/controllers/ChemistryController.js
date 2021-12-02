const apiResponse = require('../util/apiResponse');
const helpers = require('../util/helpers');
const chemistries = require('../util/chemistries');

exports.chemistryTimeline = [
  function (request, response) {
    let columns = helpers.last12Months();
    let rows = helpers.generateChemistryRows(columns, chemistries);
    // columns.unshift({ columnHeader: 'Platform', data: 'platform' });
    columns.unshift({ columnHeader: 'Chemistry', data: 'name' });
    let result = { columns: columns, rows: rows };

    return apiResponse.successResponseWithData(
      response,
      'Operation success',
      result
    );
  },
];
