import fetch from 'node-fetch';
import moment from 'moment';
import rangeContainsDate from './rangeContainsDate';

const Zerocater = token => ({
  getMeals: async options => {
    const response = await fetch(`https://app.zerocater.com/api/v3/companies/${token}/meals`);
    const allMeals = await response.json();
    if (!options || !options.range) return allMeals;
    const range = options.range || false;
    const timeFormat = options.timeFormat || false;
    return allMeals.reduce(
      (allFilteredMeals, nextMeal) => {
        const unixTime = nextMeal.time;
        if (timeFormat) nextMeal.time = moment.unix(unixTime).format(timeFormat);
        if (!range) return allFilteredMeals.concat(nextMeal);
        if (rangeContainsDate(range, unixTime)) return allFilteredMeals.concat(nextMeal);
        return allFilteredMeals;
      },
      [],
    );
  },
});

export default Zerocater;
