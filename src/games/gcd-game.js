import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (digitOne, digitTwo) => {
  let firstDigit = digitOne;
  let secondDigit = digitTwo;
  while (firstDigit !== 0 && secondDigit !== 0) {
    if (firstDigit > secondDigit) {
      firstDigit %= secondDigit;
    } else {
      secondDigit %= firstDigit;
    }
  }
  return firstDigit + secondDigit;
};

const runGcdGame = () => {
  const digitOne = getRandom();
  const digitTwo = getRandom();
  const expression = `${digitOne} ${digitTwo}`;
  const expressionCheck = getGCD(digitOne, digitTwo);
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runGcdGame);
