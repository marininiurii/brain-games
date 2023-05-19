import index from '../index.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function runPrimeGame() {
  const getRandom = () => Math.floor(Math.random() * 100) + 1;
  const expression = getRandom();
  let expressionCheck = '';
  expressionCheck = isPrime(expression) ? 'yes' : 'no';
  return [expression, expressionCheck];
}

export default runPrimeGame;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

index(description, runPrimeGame);
