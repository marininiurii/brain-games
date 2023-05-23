import runGamesLogic from '../index.js';

import getRandom from '../utilities.js';

const description = 'What is the result of the expression?';

const getCorrectAnswer = (firstDigit, secondDigit, randomOperator) => {
  let answer;
  switch (randomOperator) {
    case '+':
      answer = firstDigit + secondDigit;
      break;
    case '-':
      answer = firstDigit - secondDigit;
      break;
    case '*':
      answer = firstDigit * secondDigit;
      break;
    default:
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  }
  return answer;
};

const runCalcGame = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandom(0, 2)];
  const firstDigit = getRandom(1, 100);
  const secondDigit = getRandom(1, 100);

  const correctAnswer = getCorrectAnswer(firstDigit, secondDigit, randomOperator);
  const expression = `${firstDigit} ${randomOperator} ${secondDigit}`;
  return [expression, correctAnswer.toString()];
};

export default () => runGamesLogic(description, runCalcGame);
