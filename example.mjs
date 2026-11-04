import { QUOTED_RATE, chanceAtLeastOne, chestsForChance, squadChests } from './odds.js';

const pct = (x) => (x * 100).toFixed(2) + '%';
const cases = [
  ['Solo: 8 chests a match, 10 matches a day, 30 days', squadChests(8, 10, 30, 1)],
  ['Squad of 4, same pace', squadChests(8, 10, 30, 4)],
  ['Squad of 4: 25 chests each a match, 10 a day, 30 days', squadChests(25, 10, 30, 4)],
];
for (const [label, n] of cases) {
  console.log(`${label}: ${n.toLocaleString('en-US')} chests -> ${pct(chanceAtLeastOne(QUOTED_RATE, n))}`);
}
console.log(`Coin flip (50%) needs about ${Math.round(chestsForChance(QUOTED_RATE, 0.5)).toLocaleString('en-US')} chests.`);
