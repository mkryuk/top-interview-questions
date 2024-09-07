export function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
  const remainingRocks: number[] = [];
  for (let i = 0; i < capacity.length; i++) {
    remainingRocks.push(capacity[i] - rocks[i]);
  }
  remainingRocks.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < remainingRocks.length; i++) {
    if (additionalRocks >= remainingRocks[i]) {
      additionalRocks -= remainingRocks[i];
      result++;
    } else {
      break;
    }
  }
  return result;
}
