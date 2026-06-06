export function totalWaviness(num1: number, num2: number): number {
  const right = countUpTo(num2);
  const left = countUpTo(num1 - 1);

  // leetcode typescript usually expects number.
  // internally we use bigint because the exact answer can exceed number safe integer.
  return Number(right - left);
}

function countUpTo(n: number): bigint {
  if (n <= 0) {
    return 0n;
  }

  const digits = String(n)
    .split("")
    .map((ch) => Number(ch));
  const memo = new Map<string, DpResult>();

  function dfs(pos: number, tight: boolean, started: boolean, prev2: number, prev1: number): DpResult {
    if (pos === digits.length) {
      return {
        count: 1n,
        sum: 0n,
      };
    }

    const key = `${pos}|${started ? 1 : 0}|${prev2}|${prev1}`;

    if (!tight && memo.has(key)) {
      return memo.get(key)!;
    }

    const limit = tight ? digits[pos] : 9;

    let totalCount = 0n;
    let totalSum = 0n;

    for (let digit = 0; digit <= limit; digit++) {
      const nextTight = tight && digit === limit;

      if (!started && digit === 0) {
        const child = dfs(pos + 1, nextTight, false, -1, -1);

        totalCount += child.count;
        totalSum += child.sum;

        continue;
      }

      let add = 0;
      let nextPrev2 = prev2;
      let nextPrev1 = prev1;

      if (!started) {
        // first real digit
        nextPrev2 = -1;
        nextPrev1 = digit;
      } else if (prev2 === -1) {
        // second real digit
        nextPrev2 = prev1;
        nextPrev1 = digit;
      } else {
        // now prev1 has both neighbors: prev2 and digit
        if (isPeakOrValley(prev2, prev1, digit)) {
          add = 1;
        }

        nextPrev2 = prev1;
        nextPrev1 = digit;
      }

      const child = dfs(pos + 1, nextTight, true, nextPrev2, nextPrev1);

      totalCount += child.count;
      totalSum += child.sum + BigInt(add) * child.count;
    }

    const result = {
      count: totalCount,
      sum: totalSum,
    };

    if (!tight) {
      memo.set(key, result);
    }

    return result;
  }

  return dfs(0, true, false, -1, -1).sum;
}

function isPeakOrValley(left: number, middle: number, right: number): boolean {
  if (middle > left && middle > right) {
    return true;
  }

  if (middle < left && middle < right) {
    return true;
  }

  return false;
}

type DpResult = {
  count: bigint;
  sum: bigint;
};
