export function distributeCandies(n: number, limit: number): number {
  // total unrestricted distributions of candies among 3 children
  const totalDistributions = combinationsOfTwo(n + 2);

  // distributions where one child exceeds the allowed limit
  const oneChildOverLimit = combinationsOfTwo(n - limit + 1);

  // distributions where two children exceed the allowed limit
  const twoChildrenOverLimit = combinationsOfTwo(n - 2 * limit);

  // distributions where all three children exceed the allowed limit
  const allChildrenOverLimit = combinationsOfTwo(n - 3 * limit - 1);

  // apply the inclusion-exclusion principle
  const result = totalDistributions - 3 * oneChildOverLimit + 3 * twoChildrenOverLimit - allChildrenOverLimit;

  return result;
}

// compute the number of ways to choose 2 items from x items
function combinationsOfTwo(x: number): number {
  return x < 2 ? 0 : (x * (x - 1)) / 2;
}
