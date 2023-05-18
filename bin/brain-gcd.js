#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import gcdGame from '../src/games/gcd-game.js';
// eslint-disable-next-line import/extensions
import index from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

index(description, gcdGame);
