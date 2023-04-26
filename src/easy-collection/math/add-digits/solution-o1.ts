export function addDigits(num: number): number {
  // if (num == 0) return 0;
  // if (num % 9 == 0) return 9;
  // return num % 9;
  return num == 0 ? 0 : 1 + ((num - 1) % 9);
}
