import moment from 'moment';

const predefinedRanges = {
  month: () => ({
    start: moment().startOf('month'),
    end: moment().endOf('month'),
  }),
  week: () => ({
    start: moment().startOf('week'),
    end: moment().endOf('week'),
  }),
  yesterday: () => ({
    start: moment().subtract(1, 'days').startOf('day'),
    end: moment().subtract(1, 'days').endOf('day'),
  }),
  tomorrow: () => ({
    start: moment().add(1, 'days').startOf('day'),
    end: moment().add(1, 'days').endOf('day'),
  }),
  today: () => ({
    start: moment().startOf('day'),
    end: moment().endOf('day'),
  }),
};

const getValidRange = range => {
  if (typeof range === 'object') {
    if (range.start && range.end) return range;

    throw new Error('Date range is missing either a start or end time!');
  } else {
    const predefinedRange = predefinedRanges[range];
    if (predefinedRange) return predefinedRange();

    throw new Error(
      'Specified predefined date range does not exist.\n' +
      `Please choose one of: ${Object.keys(predefinedRanges).join(', ')}`,
    );
  }
};

const rangeContainsDate = (range, time) => {
  const { start, end } = getValidRange(range);
  return moment.unix(time).isBetween(start, end);
};

export default rangeContainsDate;
