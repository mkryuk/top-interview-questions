export function myAtoi(s: string): number {
  const value = parseInt(s.trim(), 10);

  if (Number.isNaN(value)) {
    return 0;
  }
  if (value > 2147483647) {
    return 2147483647;
  }
  if (value < -2147483648) {
    return -2147483648;
  }
  return value;
}
