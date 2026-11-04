// Pirate Token odds: the chance of finding at least one token after opening n chests.
// Same math as the calculator on https://piratetoken.net
// The drop rate is NOT official. 1 in 700,000 is the figure players commonly quote.

export const QUOTED_RATE = 1 / 700000;

// 1 - (1 - p)^n, computed in a way that stays accurate for very small p.
export function chanceAtLeastOne(p, n) {
  if (!(p > 0) || !(n > 0)) return 0;
  if (p >= 1) return 1;
  return -Math.expm1(n * Math.log1p(-p));
}

// How many chests you need for a given chance (e.g. 0.5 for a coin flip).
export function chestsForChance(p, target) {
  if (!(p > 0) || !(target > 0) || target >= 1) return Infinity;
  return Math.log1p(-target) / Math.log1p(-p);
}

// Reported: if one teammate finds it, the whole squad gets it,
// so every chest your squad opens counts for you.
export function squadChests(chestsPerMatch, matchesPerDay, days, squadSize = 1) {
  return chestsPerMatch * matchesPerDay * days * squadSize;
}
