const MOD = 1_000_000_007;
const MAX_VALUE = 200;

export function subsequencePairCount(nums: number[]): number {
  let dp = createMatrix();

  // both subsequences are initially empty
  dp[0][0] = 1;

  for (const value of nums) {
    const nextDp = createMatrix();
    for (let gcd1 = 0; gcd1 <= MAX_VALUE; gcd1++) {
      for (let gcd2 = 0; gcd2 <= MAX_VALUE; gcd2++) {
        const count = dp[gcd1][gcd2];
        if (count === 0) {
          continue;
        }

        // do not use the current element
        nextDp[gcd1][gcd2] = addModulo(
          nextDp[gcd1][gcd2],

          count,
        );

        // add the current element to seq1
        const nextGcd1 = gcd(gcd1, value);
        nextDp[nextGcd1][gcd2] = addModulo(
          nextDp[nextGcd1][gcd2],

          count,
        );

        // add the current element to seq2
        const nextGcd2 = gcd(gcd2, value);
        nextDp[gcd1][nextGcd2] = addModulo(
          nextDp[gcd1][nextGcd2],

          count,
        );
      }
    }

    dp = nextDp;
  }

  let result = 0;

  // gcd starts from 1, so both subsequences are non-empty
  for (let commonGcd = 1; commonGcd <= MAX_VALUE; commonGcd++) {
    result = addModulo(
      result,

      dp[commonGcd][commonGcd],
    );
  }

  return result;
}

function gcd(first: number, second: number): number {
  while (second !== 0) {
    const remainder = first % second;
    first = second;
    second = remainder;
  }

  return first;
}

function createMatrix(): number[][] {
  return Array.from({ length: MAX_VALUE + 1 }, () => new Array<number>(MAX_VALUE + 1).fill(0));
}

function addModulo(current: number, value: number): number {
  const result = current + value;
  if (result >= MOD) {
    return result - MOD;
  }
  return result;
}
