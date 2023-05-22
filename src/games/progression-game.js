import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What number is missing in the progression?';

const getRandomStep = () => Math.floor(Math.random() * 10) + 1;

const getProgression = () => {
  let firstDigit = getRandom();
  const getStep = getRandomStep();
  const result = [];
  let count = 0;
  while (count < 11) {
    result.push(firstDigit);
    firstDigit += getStep;
    count += 1;
  }
  return result;
};

const runProgressionGame = () => {
  const progression = getProgression();
  const getIndexRandom = progression[Math.floor(Math.random() * progression.length)];
  const expression = progression.join(' ').replace(getIndexRandom, '..');
  const expressionCheck = getIndexRandom;
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runProgressionGame);
