export function repairCars(ranks: number[], cars: number): number {
  let low = Math.min(...ranks);
  let high = Math.max(...ranks) * cars * cars;

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canBeRepaired(mid, ranks, cars)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function canBeRepaired(time: number, ranks: number[], cars: number): boolean {
  let total = 0;
  for (const rank of ranks) {
    total += Math.floor(Math.sqrt(time / rank));
    if (total >= cars) {
      return true;
    }
  }
  return false;
}
