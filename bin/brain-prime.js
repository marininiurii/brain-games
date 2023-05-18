#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import primeGame from '../src/games/prime-game.js';
// eslint-disable-next-line import/extensions
import index from '../src/index.js';
/* eslint-disable no-console */
console.log('brain-prime');
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

index(description, primeGame);
