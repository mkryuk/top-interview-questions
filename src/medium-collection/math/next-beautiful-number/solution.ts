export function nextBeautifulNumber(n: number): number {
  for (let i = n + 1; i <= 1224444; i += 1) {
    if (isBalance(i)) {
      return i;
    }
  }
  return -1;
}

function isBalance(num: number): boolean {
  // count occurrences of each digit 0–9
  const count: number[] = new Array(10).fill(0);

  // extract digits
  while (num > 0) {
    const digit: number = num % 10;
    count[digit] += 1;
    num = Math.floor(num / 10);
  }

  // verify each digit obeys its rule
  for (let d = 0; d < 10; d += 1) {
    if (count[d] > 0 && count[d] !== d) {
      return false;
    }
  }

  return true;
}
