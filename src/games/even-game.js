import index from '../index.js';

function runEvenGame() {
  const getRandom = Math.floor(Math.random() * 100) + 1;
  const randomNumber = getRandom;
  let correctAnswer = '';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  }
  if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }
  return [randomNumber, correctAnswer];
}
export default runEvenGame;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

index(description, runEvenGame);
