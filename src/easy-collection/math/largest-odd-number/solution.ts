export function largestOddNumber(num: string): string {
  let n = num.length;
  for (let i = n; i >= 0; i--) {
    if (parseInt(num[i], 10) % 2 > 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
}
