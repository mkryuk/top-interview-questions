export function numberOfStableArrays(zero: number, one: number, limit: number): number {
  const mod = 1e9 + 7;

  // dp0[i][j] = count of valid arrays with i zeros and j ones, ending with 0
  const dp0: number[][] = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));
  // dp1[i][j] = count of valid arrays with i zeros and j ones, ending with 1
  const dp1: number[][] = Array.from({ length: zero + 1 }, () => Array(one + 1).fill(0));

  // base cases for arrays containing only 0s
  for (let i = 1; i <= zero; i++) {
    if (i <= limit) {
      dp0[i][0] = 1;
    }
  }

  // base cases for arrays containing only 1s
  for (let j = 1; j <= one; j++) {
    if (j <= limit) {
      dp1[0][j] = 1;
    }
  }

  for (let i = 1; i <= zero; i++) {
    for (let j = 1; j <= one; j++) {
      // transition for ending with 0
      let waysEndWithZero = addMod(dp0[i - 1][j], dp1[i - 1][j], mod);

      if (i - limit - 1 >= 0) {
        waysEndWithZero = subMod(waysEndWithZero, dp1[i - limit - 1][j], mod);
      }

      dp0[i][j] = waysEndWithZero;

      // transition for ending with 1
      let waysEndWithOne = addMod(dp0[i][j - 1], dp1[i][j - 1], mod);

      if (j - limit - 1 >= 0) {
        waysEndWithOne = subMod(waysEndWithOne, dp0[i][j - limit - 1], mod);
      }

      dp1[i][j] = waysEndWithOne;
    }
  }

  return addMod(dp0[zero][one], dp1[zero][one], mod);
}

function addMod(a: number, b: number, mod: number): number {
  return (a + b) % mod;
}

function subMod(a: number, b: number, mod: number): number {
  return (a - b + mod) % mod;
}
