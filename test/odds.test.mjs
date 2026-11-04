import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QUOTED_RATE, chanceAtLeastOne, chestsForChance, squadChests } from '../odds.js';

test('no chests, no chance', () => assert.equal(chanceAtLeastOne(QUOTED_RATE, 0), 0));
test('matches 1 - (1-p)^n', () => {
  const n = 7000;
  assert.ok(Math.abs(chanceAtLeastOne(QUOTED_RATE, n) - (1 - Math.pow(1 - QUOTED_RATE, n))) < 1e-12);
});
test('chestsForChance is the inverse', () => {
  const n = chestsForChance(QUOTED_RATE, 0.5);
  assert.ok(Math.abs(chanceAtLeastOne(QUOTED_RATE, n) - 0.5) < 1e-9);
});
test('squad of 4 opens 4x the chests', () => assert.equal(squadChests(8, 10, 30, 4), 9600));
