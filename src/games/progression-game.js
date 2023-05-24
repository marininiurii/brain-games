import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What number is missing in the progression?';
const minRandomDigit = 1;
const maxRandomDigit = 100;
const maxRandomDigitStep = 10;
const progressionLength = 10;

const getProgression = (firstDigit, getStep) => {
  let digit = firstDigit;
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(digit);
    digit += getStep;
  }
  return result;
};

const runProgressionGame = () => {
  const firstDigit = getRandom(minRandomDigit, maxRandomDigit);
  const randomStep = getRandom(minRandomDigit, maxRandomDigitStep);
  const progression = getProgression(firstDigit, randomStep);
  const randomIndex = getRandom(0, progression.length - 1);
  const expressionCheck = progression[randomIndex];
  progression[randomIndex] = '..';
  const expression = progression.join(' ');
  return [expression, expressionCheck.toString()];
};

export default () => runGamesLogic(description, runProgressionGame);
