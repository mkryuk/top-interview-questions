export function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m + 1 }, () => {
    return Array.from({ length: n + 1 }, () => {
      return 0;
    });
  });

  // process each string as an item that consumes (zeros, ones) and yields value 1
  for (const s of strs) {
    const { zeros, ones } = countBits(s);

    // iterate capacities in reverse so each string is used at most once
    for (let z = m; z >= zeros; z--) {
      for (let o = n; o >= ones; o--) {
        const pick = dp[z - zeros][o - ones] + 1;
        if (pick > dp[z][o]) {
          dp[z][o] = pick;
        }
      }
    }
  }

  return dp[m][n];
}

function countBits(s: string): { zeros: number; ones: number } {
  let zeros = 0;
  let ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      ones++;
    }
  }
  return { zeros, ones };
}
