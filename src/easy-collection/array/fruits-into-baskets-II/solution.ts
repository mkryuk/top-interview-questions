export function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let result = 0;
  for (const fruit of fruits) {
    let placed = false;
    for (let i = 0; i < baskets.length; i++) {
      if (fruit <= baskets[i]) {
        baskets[i] = 0;
        placed = true;
        break;
      }
    }
    if (placed === false) {
      result++;
    }
    placed = false;
  }
  return result;
}
