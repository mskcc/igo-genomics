// if (dayMin + d <= start) priorR = [min..start]
// if (dayMax - end >= d) afterR = [end..max]
// return priorR+afterR
const _ = require('lodash');
const duration = 3;
export function getAvailableHours(
  startTime,
  range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
) {
  if (!range.includes(startTime)) return [];
  const start = startTime;
  const end = start + duration;

  const dayMin = range[0];
  const dayMax = range[range.length - 1];

  let priorRange = [];
  let afterRange = [];
  // can someone book prior to this appointment?
  if (dayMin + duration <= start) {
    // create times between minimum for that day and start time of appointment
    priorRange = _.range(dayMin, startTime - 2);
    // only keep times that still exist in the current range
    priorRange = _.intersection(priorRange, range);
  }
  if (dayMax - end >= duration) {
    afterRange = _.range(end, dayMax + 1);
    afterRange = _.intersection(afterRange, range);
  }
  //  remove times after 6pm
  let result = [...priorRange, ...afterRange].filter(
    (element) => element <= 18
  );
  return result;
}
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
export function last12Months() {
  var dates = [];
  let d = new Date();
  let y = d.getFullYear();
  let m = d.getMonth();
  function padMonth(month) {
    if (month < 10) {
      return '0' + month;
    } else {
      return month;
    }
  }
  if (m === 11) {
    for (var i = 1; i < 13; i++) {
      let month = parseInt(padMonth(i));
      let data = months[month - 1];
      dates.push({
        year: y,
        month: parseInt(padMonth(i)),
        columnHeader: data,
        data: data,
      });
    }
  } else {
    for (var i = m + 1; i < m + 13; i++) {
      if (i % 12 > m) {
        let month = parseInt(padMonth(i + 1));
        let data = months[month - 1];
        dates.push({ year: y - 1, month: m, columnHeader: data, data: data });
      } else {
        let month = parseInt(padMonth((i % 12) + 1));
        let data = months[month - 1];
        dates.push({ year: y, month: month, columnHeader: data, data: data });
      }
    }
  }

  return dates;
}
console.log(last12Months());
