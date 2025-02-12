export function maximumSum(nums: number[]): number {
  const map = new Map<number, [number, number]>();
  let result = -1;
  for (const num of nums) {
    const digitSum = sumOfDigits(num);
    if (!map.has(digitSum)) {
      map.set(digitSum, [num, -1]);
      continue;
    }
    const pair = map.get(digitSum)!;
    if (num > pair[0]) {
      pair[1] = pair[0];
      pair[0] = num;
    } else if (num > pair[1]) {
      pair[1] = num;
    }
    result = Math.max(result, pair[0] + pair[1]);
  }
  return result;
}

function sumOfDigits(num: number): number {
  let result = 0;
  while (num > 0) {
    result += num % 10;
    num = Math.trunc(num / 10);
  }
  return result;
}
