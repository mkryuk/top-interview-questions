export function countPermutations(complexity: number[]): number {
  const MOD: number = 1e9 + 7;
  let result: number = 1;

  // check that every other computer has strictly higher complexity than computer 0
  for (let i: number = 1; i < complexity.length; i++) {
    if (complexity[i] <= complexity[0]) {
      return 0;
    }

    result = (result * i) % MOD;
  }

  return result;
}
