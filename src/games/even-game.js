/* eslint-disable no-console */
function evenGame() {
  const getRandom = Math.floor(Math.random() * 100);
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
export { evenGame };
