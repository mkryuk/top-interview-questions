export function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) {
    return -1;
  }
  let min = Infinity;
  let max = -Infinity;
  for (const day of bloomDay) {
    min = Math.min(day, min);
    max = Math.max(day, max);
  }
  while (min < max) {
    const mid = Math.floor(min + (max - min) / 2);
    if (canMakeBouquets(mid, bloomDay, m, k)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return min;
}

function canMakeBouquets(days: number, bloomDay: number[], m: number, k: number): boolean {
  let flowers = 0;
  let bouquets = 0;
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= days) {
      flowers++;
    } else {
      flowers = 0;
    }
    if (flowers === k) {
      bouquets++;
      flowers = 0;
    }
  }
  return bouquets >= m;
}
