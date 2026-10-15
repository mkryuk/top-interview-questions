export function maxSumOfSquares(num: number, sum: number): string {
  // the requested digit sum cannot fit into num digits
  if (sum > 9 * num) {
    return "";
  }

  const fullNines = Math.floor(sum / 9);
  const remainder = sum % 9;
  const parts: string[] = [];

  // putting the largest digits first also maximizes the integer
  if (fullNines > 0) {
    parts.push("9".repeat(fullNines));
  }

  if (remainder > 0) {
    parts.push(remainder.toString());
  }

  const usedDigits = fullNines + (remainder > 0 ? 1 : 0);
  const zeroCount = num - usedDigits;
  if (zeroCount > 0) {
    parts.push("0".repeat(zeroCount));
  }

  return parts.join("");
}
