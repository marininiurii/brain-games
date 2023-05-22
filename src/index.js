import readlineSync from 'readline-sync';

const runGamesLogic = (description, getGameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [expression, expressionCheck] = getGameLogic();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (expressionCheck === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${expressionCheck}\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGamesLogic;
