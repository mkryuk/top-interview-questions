export function flowerGame(n: number, m: number): number {
  // idea: alice wins iff x + y is odd, x and y have different parity
  // count = (odd x * even y) + (even x * odd y)
  // count odds in [1..k] is ⌈k/2⌉, evens is ⌊k/2⌋
  const oddN: number = Math.floor((n + 1) / 2);
  const evenN: number = Math.floor(n / 2);
  const oddM: number = Math.floor((m + 1) / 2);
  const evenM: number = Math.floor(m / 2);

  // pairs with different parity
  const result: number = oddN * evenM + evenN * oddM;
  return result;
}
