#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import evenGame from '../src/games/even-game.js';
// eslint-disable-next-line import/extensions
import index from '../src/index.js';
/* eslint-disable no-console */
console.log('brain-even');
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

index(description, evenGame);
