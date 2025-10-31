export function minNumberOperations(target: number[]): number {
  let result = 0;
  let prev = 0;
  for (let i = 0; i < target.length; i++) {
    result += diff(prev, target[i]);
    prev = target[i];
  }
  return result;
}

function diff(prev: number, curr: number): number {
  if (curr > prev) {
    return curr - prev;
  }
  return 0;
}
