import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomDigit = 1;
const maxRandomDigit = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const expression = getRandom(minRandomDigit, maxRandomDigit);
  const expressionCheck = isPrime(expression) ? 'yes' : 'no';
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runPrimeGame);
