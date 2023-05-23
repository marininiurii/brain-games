import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const runEvenGame = () => {
  const randomNumber = getRandom(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer.toString()];
};

export default () => runGamesLogic(description, runEvenGame);
