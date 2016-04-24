# zerocater-node
Node.js client for Zerocater.

So far there is only 1 method for accessing ZeroCater's information because the API is undocumented, but there will slowly be more to come!

### Getting started
1. Install and save the package
  ```bash
  npm i -S zerocater
  ```

2. Import the package
  ```js
  import ZeroCater from 'zerocater'; // ES6
  // OR
  var ZeroCater = require('zerocater').default; // ES5
  ```

3. Instantiate the class `Zerocater([ZeroCater shortcode])`
  ```js
  // If your url is `https://zerocater.com/m/XXXX`, `XXXX` is your shortcode
  const zc = ZeroCater('XXXX');
  ```
  
### Methods
* `getMeals([string representation of time])`
  ```js
  const allMeals = zc.getMeals(); // An array of all the meals past and present attached to your account
  // Currently accepts one of these strings: 'month', 'week', 'yesterday', 'today', 'tomorrow'
  const tomorrowMeal = zc.getMeals('tomorrow');
  ```

* More to come...
