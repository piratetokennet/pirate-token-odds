# pirate-token-odds

Tiny, dependency-free JavaScript for working out your odds of finding the **Pirate Token (Pirate Shop Access)** in Fortnite Treasure Hunters.

> Epic Games has not published a drop rate. The `1 in 700,000` per chest used here is the figure players commonly quote, not an official number.

## The math

Each chest is treated as an independent roll with probability `p`. After `n` chests, the chance of at least one token is:

```
P = 1 - (1 - p)^n
```

Finds are reported to count for the whole squad, so in a squad every chest your teammates open counts for you too.

## Example results (p = 1 / 700,000)

| How you play | Chests that count | Chance |
|---|---|---|
| Solo: 8 chests a match, 10 matches a day, 30 days | 2,400 | 0.34% |
| Squad of 4, same pace | 9,600 | 1.36% |
| Squad of 4: 25 chests each a match, 10 a day, 30 days | 30,000 | 4.20% |
| Coin flip (50%) | about 485,203 | 50% |

## Usage

```bash
npm test        # run the tests (Node 18+)
npm run example # print the table above
```

```js
import { QUOTED_RATE, chanceAtLeastOne, squadChests } from './odds.js';

chanceAtLeastOne(QUOTED_RATE, squadChests(25, 10, 30, 4)); // 0.042
```

## Try it in your browser

The same math, with your own numbers, a chest map and the activation countdown: **[piratetoken.net](https://piratetoken.net)**

## More Pirate Token guides

- [Power Hour and Treasure Hours times](https://piratetoken.net/pirate-token-power-hour), shown in your time zone
- [What the token lets you claim](https://piratetoken.net/pirate-token-items): Item Shop rules, one-Sidekick limit, what's excluded
- [When to activate](https://piratetoken.net/pirate-token-activation), with a planner for the 14-day window
- [Which modes can drop it](https://piratetoken.net/pirate-token-modes)
- [Rumors, fact-checked](https://piratetoken.net/pirate-token-myths)

## License

MIT. Fan project, not affiliated with or endorsed by Epic Games. Fortnite is a trademark of Epic Games, Inc.
