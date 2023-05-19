import index from '../index.js';

function runGcdGame() {
  const getRandom = () => Math.floor(Math.random() * 100) + 1;
  let firstDigit = getRandom();
  let secondDigit = getRandom();
  const expression = `${firstDigit} ${secondDigit}`;
  while (firstDigit !== 0 && secondDigit !== 0) {
    if (firstDigit > secondDigit) {
      firstDigit %= secondDigit;
    } else {
      secondDigit %= firstDigit;
    }
  }
  const expressionCheck = secondDigit + firstDigit;
  return [expression, expressionCheck.toString()];
}
export default runGcdGame;

const description = 'Find the greatest common divisor of given numbers.';

index(description, runGcdGame);
