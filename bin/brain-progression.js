#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import progressionGame from '../src/games/progression-game.js';
// eslint-disable-next-line import/extensions
import index from '../src/index.js';
/* eslint-disable no-console */
console.log('brain-progression');
const description = 'What number is missing in the progression?';

index(description, progressionGame);
