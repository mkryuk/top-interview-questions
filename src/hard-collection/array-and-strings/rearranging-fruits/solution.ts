export function minCost(basket1: number[], basket2: number[]): number {
  // count frequency of each fruit across both baskets
  const totalCount = new Map<number, number>();

  for (const fruit of basket1) {
    totalCount.set(fruit, (totalCount.get(fruit) || 0) + 1);
  }

  for (const fruit of basket2) {
    totalCount.set(fruit, (totalCount.get(fruit) || 0) + 1);
  }

  // check if it's possible to make baskets equal
  // ech fruit must appear an even number of times total
  for (const count of totalCount.values()) {
    if (count % 2 !== 0) {
      return -1;
    }
  }

  // count current frequencies in each basket
  const count1 = new Map<number, number>();
  const count2 = new Map<number, number>();

  for (const fruit of basket1) {
    count1.set(fruit, (count1.get(fruit) || 0) + 1);
  }

  for (const fruit of basket2) {
    count2.set(fruit, (count2.get(fruit) || 0) + 1);
  }

  // find fruits that basket1 has in excess (need to give to basket2)
  const giveAway: number[] = [];

  for (const [fruit, totalFreq] of totalCount) {
    const targetPerBasket = totalFreq / 2;
    const currentInBasket1 = count1.get(fruit) || 0;

    if (currentInBasket1 > targetPerBasket) {
      const excess = currentInBasket1 - targetPerBasket;
      for (let i = 0; i < excess; i++) {
        giveAway.push(fruit);
      }
    }
  }

  // find fruits that basket2 has in excess (basket1 needs to receive)
  const receive: number[] = [];

  for (const [fruit, totalFreq] of totalCount) {
    const targetPerBasket = totalFreq / 2;
    const currentInBasket2 = count2.get(fruit) || 0;

    if (currentInBasket2 > targetPerBasket) {
      const excess = currentInBasket2 - targetPerBasket;
      for (let i = 0; i < excess; i++) {
        receive.push(fruit);
      }
    }
  }

  // sort for optimal pairing
  // we want to pair expensive fruits we're giving away with cheap fruits we're receiving
  giveAway.sort((a, b) => b - a); // xort in descending order (most expensive first)
  receive.sort((a, b) => a - b); // sort in ascending order (cheapest first)

  let totalCost = 0;
  const minFruit = Math.min(...Array.from(totalCount.keys()));

  // calculate minimum cost for each swap
  for (let i = 0; i < giveAway.length; i++) {
    const fruitToGive = giveAway[i];
    const fruitToReceive = receive[i];

    // option 1: direct swap
    const directCost = Math.min(fruitToGive, fruitToReceive);

    // option 2: indirect swap through minimum element
    // give away our fruit for min cost, then use min element to get what we need
    const indirectCost = 2 * minFruit;

    totalCost += Math.min(directCost, indirectCost);
  }

  return totalCost;
}
