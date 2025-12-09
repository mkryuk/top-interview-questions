export function countTriples(n: number): number {
  // build a set of valid square values (c^2 where 1 <= c <= n)
  const squares: Set<number> = new Set<number>();

  for (let c: number = 1; c <= n; c++) {
    const square: number = c * c;
    squares.add(square);
  }

  let count: number = 0;
  // iterate over all possible a and b
  for (let a: number = 1; a <= n; a++) {
    for (let b: number = 1; b <= n; b++) {
      const sum: number = a * a + b * b;
      // if a^2 + b^2 equals some c^2 with c <= n, count it
      if (squares.has(sum) === true) {
        count++;
      }
    }
  }

  return count;
}
