export function minimumBoxes(apple: number[], capacity: number[]): number {
  let apples = apple.reduce((p, c) => p + c, 0);
  capacity.sort((a, b) => b - a);
  let result = 0;
  let boxIndex = 0;
  while (apples > 0 && boxIndex < capacity.length) {
    apples -= capacity[boxIndex++];
    result++;
  }
  return result;
}
