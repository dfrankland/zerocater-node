import moment from 'moment';

const ranges = {
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

const rangeContainsDate = (rangeKey, time) => {
  const range = ranges[rangeKey]();
  return moment.unix(time).isBetween(range.start, range.end);
};

export default rangeContainsDate;
