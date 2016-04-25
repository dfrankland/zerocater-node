import fetch from 'node-fetch';
import rangeContainsDate from './rangeContainsDate';

const Zerocater = token => ({
  getMeals: async options => {
    const response = await fetch(`https://api.zerocater.com/v3/companies/${token}/meals`);
    const allMeals = await response.json();
    if (!options || !options.range) return allMeals;
    const range = options.range || false;
    return allMeals.reduce(
      (allFilteredMeals, nextMeal) => {
        const unixTime = nextMeal.time;
        if (!range) return allFilteredMeals.concat(nextMeal);
        if (rangeContainsDate(range, unixTime)) return allFilteredMeals.concat(nextMeal);
        return allFilteredMeals;
      }, []
    );
  },
});

export default Zerocater;
