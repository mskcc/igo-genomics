// if (dayMin + d <= start) priorR = [min..start]
// if (dayMax - end >= d) afterR = [end..max]

const moment = require('moment');

// return priorR+afterR
const _ = require('lodash');
const duration = 3;
exports.getAvailableHours = (startTime, range) => {
  // console.log(range);
  // if (!range.includes(startTime)) return [];
  const existingApptStartTime = startTime;
  const existingApptEndTime = existingApptStartTime + duration;

  const dayMin = range[0];
  const dayMax = range[range.length - 1];

  let priorRange = [];
  let afterRange = [];
  // can someone book prior to this appointment?
  if (dayMin + duration <= existingApptStartTime) {
    // create times between minimum for that day and start time of appointment
    priorRange = _.range(dayMin, startTime - 2);
    // only keep times that still exist in the current range
    priorRange = _.intersection(priorRange, range);
  }
  if (dayMax - existingApptEndTime >= duration) {
    afterRange = _.range(existingApptEndTime, dayMax + 1);
    afterRange = _.intersection(afterRange, range);
  }
  //  remove times after 6pm
  let result = [...priorRange, ...afterRange].filter(
    (element) => element <= 18
  );
  return result;
};
// console.log('18', getAvailableHours(15));
// console.log('10', getAvailableHours(14));
// console.log('11', getAvailableHours(11));
// console.log(
//   'existing booking at 13, next booking at 10',
//   getAvailableHours(10, [10, 16, 17, 18, 19, 20, 21])
// );

// // [13, 14, 15]
// console.log(
//   'existing booking at 10, next booking at 18',
//   getAvailableHours(18, [13, 14, 15, 16, 17, 18, 19, 20, 21])
// );

// range: [10..21]
// start: 17
// end: 20
// d: 3
// remove start up to end-1
// if (remaining range < start-time] < 3
// remove 2 previous items / remove hrs less than start time
// if count after end time <= 3
// remove hrs > end time

function getRemainingTimes(startTime) {
  const hoursRange = [10, 16, 17, 18, 19, 20, 21];
  const duration = 3;
  const start = startTime;
  const end = start + duration;

  const index = hoursRange.indexOf(start);
  if (index > -1) {
    hoursRange.splice(index, duration);
  }
  // remove items smaller than start time in the remaining range if their count is smaller than 3
  const newIndex = hoursRange.indexOf(start - 1);
  //   number of elements earlier than start time
  const earlierTimesRemaining = newIndex + 1;
  if (earlierTimesRemaining < 3) {
    hoursRange.splice(0, earlierTimesRemaining);
  } else {
    const buffer = hoursRange.indexOf(start - 2);
    hoursRange.splice(buffer, 2);
  }

  const laterIndex = hoursRange.indexOf(end);
  const laterHoursSize = hoursRange.length - laterIndex;
  if (laterHoursSize < duration) {
    hoursRange.splice(laterIndex, laterHoursSize);
  }
  return hoursRange.filter((element) => element < 19);
}
const { after } = require('lodash');
// console.log(getRemainingTimes(17));
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
exports.last12Months = () => {
  let d = new Date();
  let y = d.getFullYear();
  let m = d.getMonth();

  let monthNumber, monthName, year, data;
  let columns = [];

  // add zeros to single digit months to keep them valid Date months
  function padMonth(month) {
    if (month < 10) {
      return '0' + month;
    } else {
      return month;
    }
  }
  // if its december
  if (m === 11) {
    // returns months 01, 02, 03 ...12 monthname Jan to Dec
    for (var i = 6; i < 13; i++) {
      monthNumber = padMonth(i);
      monthName = months[monthNumber - 1];
      year = y;
      columns.push({
        columnHeader: `${monthName.substring(0, 3)} ${year}`,
        data: `${monthNumber}-01-${y}`,
        renderer: 'html',
      });
    }
  } else {
    for (var i = m + 6; i < m + 13; i++) {
      if (i % 12 > m) {
        monthNumber = padMonth(i + 1);
        monthName = months[monthNumber - 1];
        year = y - 1;
      } else {
        monthNumber = padMonth((i % 12) + 1);
        monthName = months[monthNumber - 1];
        year = y;
      }
      columns.push({
        columnHeader: `${monthName.substring(0, 3)} ${year}`,
        data: `${monthNumber}-01-${year}`,
        renderer: 'html',
      });
    }
  }
  return columns;
};

exports.generateChemistryRows = (columns, chemistries) => {
  let rows = [];
  let timeWindow = columns.map((element) => element.data);

  // filter chemistries where endDate outside of current time window/last 12 months
  chemistries = chemistries.filter(
    (chemistry) =>
      timeWindow.includes(chemistry.stop) || chemistry.stop === 'present'
  );

  chemistries.forEach((chemistry) => {
    // choose timeline start date by checking which ones more recent: the time window's first month or the chemistry start month?
    let periodStart =
      new Date(timeWindow[0]) > new Date(chemistry.start)
        ? timeWindow[0]
        : chemistry.start;
    var dateStart = moment(new Date(periodStart));
    var dateEnd;
    // if chemistry.stop = present, stop the timeline with the current date, else use the chemistry's stop date
    if (chemistry.stop === 'present') {
      dateEnd = moment(new Date());
    } else {
      dateEnd = moment(new Date(chemistry.stop));
    }

    var timeValues = [];
    let color = chemistry.color ? chemistry.color : '#006098';
    let row = { name: chemistry.name, color: color };

    while (
      dateEnd > dateStart ||
      dateStart.format('M') === dateEnd.format('M')
    ) {
      row[
        dateStart.format('MM-DD-YYYY')
      ] = `<div style='background-color:${color};color:${color};'>_</div>`;

      timeValues.push(dateStart.format('MM-DD-YYYY'));
      dateStart.add(1, 'month');
    }
    rows.push(row);
  });
  return rows;
};
