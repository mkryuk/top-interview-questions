export function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number,
): number {
  let result = 0;
  let windowIndex = 0;
  let windowValue = 0;
  for (let i = 0; i <= customers.length - minutes; i++) {
    let temp = 0;
    for (let j = i; j < i + minutes; j++) {
      if (grumpy[j] === 1) {
        temp += customers[j];
      }
    }
    if (temp > windowValue) {
      windowIndex = i;
    }
    windowValue = Math.max(temp, windowValue);
  }
  for (let i = 0; i < customers.length; i++) {
    if (i >= windowIndex && i < windowIndex + minutes) {
      result += customers[i];
    } else if (grumpy[i] === 0) {
      result += customers[i];
    }
  }
  return result;
}
