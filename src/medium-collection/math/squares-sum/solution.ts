export function judgeSquareSum(c: number): boolean {
  let a = 0;
  let b = Math.floor(Math.sqrt(c));

  while (a <= b) {
    const squareSum = a * a + b * b;
    if (squareSum === c) {
      return true;
    } else if (squareSum < c) {
      a++;
    } else {
      b--;
    }
  }
  return false;
}
