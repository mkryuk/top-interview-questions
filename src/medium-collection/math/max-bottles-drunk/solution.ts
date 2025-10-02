export function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  // track current full and empty bottles, current exchange cost, and total drunk
  let full: number = numBottles;
  let empty: number = 0;
  let cost: number = numExchange;
  let drunk: number = 0;

  // keep going while we can either drink some full bottles or perform an exchange
  while (full > 0 || empty >= cost) {
    // drink all current full bottles at once (allowed by the rules)
    if (full > 0) {
      // convert all full to empty and count them as drunk
      drunk += full;
      empty += full;
      full = 0;
    }

    // perform as many exchanges as possible, increasing the cost after each one
    while (empty >= cost) {
      // spend 'cost' empty bottles to get one new full bottle
      empty -= cost;
      full += 1;
      cost += 1; // cost increases after each exchange
    }
  }

  return drunk;
}
