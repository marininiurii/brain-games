import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What is the result of the expression?';

const getRandomChars = (operators = '+-*') => operators[Math.floor(Math.random() * operators.length)];

const getCorrectAnswer = (firstDigit, secondDigit, randomChar) => {
  let answer;
  if (randomChar === '+') {
    answer = firstDigit + secondDigit;
  } else if (randomChar === '-') {
    answer = firstDigit - secondDigit;
  } else if (randomChar === '*') {
    answer = firstDigit * secondDigit;
  }
  return answer;
};

const runCalcGame = () => {
  const randomChar = getRandomChars();
  const firstDigit = getRandom();
  const secondDigit = getRandom();

  const correctAnswer = getCorrectAnswer(firstDigit, secondDigit, randomChar);
  const expression = `${firstDigit} ${randomChar} ${secondDigit}`;
  return [expression, correctAnswer.toString()];
};

export default () => runGamesLogic(description, runCalcGame);
