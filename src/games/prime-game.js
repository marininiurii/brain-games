import index from '../index.js';

function runPrimeGame() {
  const getRandom = () => Math.floor(Math.random() * 100) + 1;
  const expression = getRandom();
  let expressionCheck = '';
  for (let i = 2; i <= expression / 2; i += 1) {
    if (expression % i === 0) {
      expressionCheck = 'no';
    } else {
      expressionCheck = 'yes';
    }
  }
  return [expression, expressionCheck];
}

export default runPrimeGame;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

index(description, runPrimeGame);
