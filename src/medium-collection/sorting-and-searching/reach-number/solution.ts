export function reachNumber(target: number): number {
  let sum = 0;
  // make target positive
  target = target > 0 ? target : target * -1;
  // find nearest count for the target
  let count = Math.floor((-1 + Math.sqrt(1 + 8 * target)) / 2);
  // find sum for this count
  sum = (count * (count + 1)) / 2;
  while (sum < target || (sum - target) % 2 !== 0) {
    count++;
    sum += count;
  }
  return count;
}
