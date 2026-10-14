export function maxAlternatingSum(nums: number[]): number {
  const squares: number[] = nums.map((num: number) => num * num);
  squares.sort((a: number, b: number) => a - b);
  const negativeCount: number = Math.floor(nums.length / 2);
  let result: number = 0;
  for (let i = 0; i < squares.length; i++) {
    if (i < negativeCount) {
      result -= squares[i];
    } else {
      result += squares[i];
    }
  }

  return result;
}
