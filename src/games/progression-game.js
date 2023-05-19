import index from '../index.js';

function runProgressionGame() {
  const getRandom = () => Math.floor(Math.random() * 100) + 1;
  const getRandomStep = () => Math.floor(Math.random() * 5) + 1;
  let firstDigit = getRandom();
  const getStep = getRandomStep();
  const result = [];
  let count = 0;
  while (count < 11) {
    result.push(firstDigit);
    firstDigit += getStep;
    count += 1;
  }
  const getIndexRandom = result[Math.floor(Math.random() * result.length)];
  const randomItem = getIndexRandom;
  const expression = result.join(' ').replace(randomItem, '..');
  const expressionCheck = getIndexRandom;
  return [expression, expressionCheck];
}
export default runProgressionGame;

const description = 'What number is missing in the progression?';

index(description, runProgressionGame);
