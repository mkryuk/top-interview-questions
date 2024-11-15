export function minimizedMaximum(n: number, quantities: number[]): number {
  let left = 1;
  let right = Math.max(...quantities);
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canDistribute(mid, n, quantities)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canDistribute(x: number, storeCount: number, quantities: number[]): boolean {
  let count = 0;
  for (const qty of quantities) {
    count += Math.ceil(qty / x);
    if (count > storeCount) {
      return false;
    }
  }
  return count <= storeCount;
}
