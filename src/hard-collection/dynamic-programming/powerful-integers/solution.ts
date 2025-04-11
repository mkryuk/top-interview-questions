export function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
  const length = s.length;
  const suffix = Number(s);
  const factor = Math.pow(10, length);

  // compute the allowable range
  // for x to be in [start, finish]
  let lower = 0;
  if (start > suffix) {
    lower = Math.ceil((start - suffix) / factor);
  }
  const upper = Math.floor((finish - suffix) / factor);
  if (upper < lower) {
    return 0;
  }

  // count the valid y in the interval [lower, upper] that have
  // all digits from 0 through limit (when written in their natural form).
  const count = countAllowedInRange(lower, upper, limit);
  return count;
}

// digit DP routine to count how many numbers in [0, num] have all digits in {0,1,...,limit}.
// (the DP is standard: iterating over the digits of num and obeying a tight constraint.)
function countAllowedUpTo(num: number, limit: number): number {
  const sNum = num.toString();
  const n = sNum.length;
  const memo = new Map<string, number>();

  function dp(pos: number, tight: boolean, leading: boolean): number {
    if (pos === n) {
      // reached the end; count the constructed number (even if it is 0)
      return 1;
    }
    const key = `${pos}-${tight ? 1 : 0}-${leading ? 1 : 0}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }
    let res = 0;
    // if tight is true, we cannot go above digit sX[pos];
    // however, we are only allowed to use digits up to 'limit'.
    const maxDigit = tight ? Number(sNum[pos]) : limit;
    const effectiveMax = Math.min(maxDigit, limit);
    for (let d = 0; d <= effectiveMax; d++) {
      const ntight = tight && d === maxDigit;
      const nleading = leading && d === 0;
      res += dp(pos + 1, ntight, nleading);
    }
    memo.set(key, res);
    return res;
  }

  return dp(0, true, true);
}

// count numbers with allowed digits in [lower, upper] by using DP.
function countAllowedInRange(lower: number, upper: number, limit: number): number {
  if (lower <= 0) {
    return countAllowedUpTo(upper, limit);
  } else {
    return countAllowedUpTo(upper, limit) - countAllowedUpTo(lower - 1, limit);
  }
}
