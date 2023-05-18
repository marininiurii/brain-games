#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import calcGame from '../src/games/calc-game.js';
// eslint-disable-next-line import/extensions
import index from '../src/index.js';
/* eslint-disable no-console */
console.log('brain-calc');
const description = 'What is the result of the expression?';

index(description, calcGame);
