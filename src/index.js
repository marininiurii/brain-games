/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function index(description, game) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let countCorrectAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const [expression, expressionCheck] = game();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (expressionCheck === answer.toString()) {
      console.log('Correct');
      countCorrectAnswer += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expressionCheck}\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (countCorrectAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export { index };
