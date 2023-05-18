function calcGame() {
  const getRandom = () => Math.floor(Math.random() * 100);
  const randomChars = (operators = '+-*') => operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer = '';
  const randomChar = randomChars();
  const firstDigit = getRandom();
  const secondDigit = getRandom();
  const expression = `${firstDigit} ${randomChar} ${secondDigit}`;
  if (randomChar === '+') {
    correctAnswer = firstDigit + secondDigit;
  } else if (randomChar === '-') {
    correctAnswer = firstDigit - secondDigit;
  } else if (randomChar === '*') {
    correctAnswer = firstDigit * secondDigit;
  }
  return [expression, correctAnswer.toString()];
}

export default calcGame;
