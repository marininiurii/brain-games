import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstDigit, getStep) => {
  let digit = firstDigit;
  const result = [];
  for (let i = 0; i < 10; i += 1) {
    result.push(digit);
    digit += getStep;
  }
  return result;
};

const runProgressionGame = () => {
  const firstDigit = getRandom(1, 100);
  const getStep = getRandom(1, 10);
  const progression = getProgression(firstDigit, getStep);
  const randomIndex = getRandom(0, 9);
  const expressionCheck = progression[randomIndex];
  progression[randomIndex] = '..';
  const expression = progression.join(' ');
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runProgressionGame);
