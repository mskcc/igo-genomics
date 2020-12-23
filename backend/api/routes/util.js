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
// console.log(getRemainingTimes(17));

// if (dayMin + d <= start) priorR = [min..start]
// if (dayMax - end >= d) afterR = [end..max]
// return priorR+afterR

function getAvailableHours(start) {
  const startTime = start;
  const hoursRange = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const duration = 3;
  //   const end = start + duration;

  const dayMin = Math.min(...hoursRange);
  if (dayMin + duration <= startTime) {
  }
}
console.log(getAvailableHours());
