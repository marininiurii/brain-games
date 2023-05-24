import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomDigit = 1;
const maxRandomDigit = 100;

const isEven = (randomNumber) => randomNumber % 2 === 0;

const runEvenGame = () => {
  const randomNumber = getRandom(minRandomDigit, maxRandomDigit);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer.toString()];
};

export default () => runGamesLogic(description, runEvenGame);
