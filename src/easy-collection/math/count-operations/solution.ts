export function countOperations(num1: number, num2: number): number {
  let result = 0;
  while (num1 > 0 && num2 > 0) {
    const counts = Math.floor(num1 / num2);
    num1 %= num2;
    [num1, num2] = [num2, num1];
    result += counts;
  }
  return result;
}
