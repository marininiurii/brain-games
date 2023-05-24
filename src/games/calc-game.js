import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRandomDigit = 1;
const maxRandomDigit = 100;

const calculateCorrectAnswer = (firstDigit, secondDigit, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return firstDigit + secondDigit;
    case '-':
      return firstDigit - secondDigit;
    case '*':
      return firstDigit * secondDigit;
    default:
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  }
};

const runCalcGame = () => {
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const firstDigit = getRandom(minRandomDigit, maxRandomDigit);
  const secondDigit = getRandom(minRandomDigit, maxRandomDigit);

  const correctAnswer = calculateCorrectAnswer(firstDigit, secondDigit, randomOperator);
  const expression = `${firstDigit} ${randomOperator} ${secondDigit}`;
  return [expression, correctAnswer.toString()];
};

export default () => runGamesLogic(description, runCalcGame);
