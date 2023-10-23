export function reachNumber(target: number): number {
  let sum = 0;
  let i = 1;
  target = target > 0 ? target : target * -1;
  while (true) {
    sum += i;
    if (sum === target || (sum > target && (sum - target) % 2 === 0)) {
      break;
    }
    i++;
  }
  return i;
}
