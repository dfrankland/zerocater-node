# zerocater-node

Node.js client for Zerocater.

So far there is only 1 method for accessing ZeroCater's information because the
API is undocumented, but there will slowly be more to come!

### Getting started

1.  Install and save the package

```bash
npm i -S zerocater
```

2.  Import the package

```js
import ZeroCater from 'zerocater'; // ES6
// OR
var ZeroCater = require('zerocater').default; // ES5
```

3.  Instantiate the class `Zerocater([ZeroCater shortcode])`

```js
// If your url is `https://zerocater.com/m/XXXX`, `XXXX` is your shortcode
const zc = ZeroCater('XXXX');
```

### Methods

#### `getMeals`

By default returns an array of all meals linked to your account. Accepts an
object with optional `range` and `timeFormat` properties.
```js
const allMeals = zc.getMeals(); // An array of all the meals past and present attached to your account
```

`range` can be a predefined string or a custom range object like below:

```js
// Accepts one of these predefined strings: 'month', 'week', 'yesterday', 'today', 'tomorrow'
const tomorrowMeal = zc.getMeals({ range: 'tomorrow' });
// OR
// Custom start and end range
const twoDaysOfMeals = zc.getMeals({ range: { start: '2016-04-25', end: '2016-04-26'} });
```

`timeFormat` must be a string that can be parsed by
[`moment`](http://momentjs.com/docs/#/displaying/format/):

```js
const singleMeal = zc.getMeals(
  {
    range: {
      start: '2016-04-25',
      end: '2016-04-25',
    },
    timeFormat: 'dddd, MMMM Do YYYY',
  },
);
console.log(singleMeal[0].time) // Monday, April 25th 2016
```

More to come...
