import 'babel-polyfill';
import fetch from 'node-fetch';
import rangeContainsDate from './rangeContainsDate';

const Zerocater = token => ({
  getMeals: async range => {
    const response = await fetch(`https://api.zerocater.com/v3/companies/${token}/meals`);
    const allMeals = await response.json();
    if (!range) return allMeals;
    return allMeals.filter(({ time }) => rangeContainsDate(range, time));
  },
});

export default Zerocater;
