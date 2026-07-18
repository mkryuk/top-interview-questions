export function gcdValues(nums: number[], queries: number[]): number[] {
  const maximum = Math.max(...nums);

  const frequencies = new Array<number>(maximum + 1).fill(0);

  for (const num of nums) {
    frequencies[num]++;
  }

  const exactGcdPairs = countExactGcdPairs(frequencies, maximum);
  const prefixCounts = new Array<number>(maximum + 1).fill(0);

  for (let gcd = 1; gcd <= maximum; gcd++) {
    prefixCounts[gcd] = prefixCounts[gcd - 1] + exactGcdPairs[gcd];
  }

  return queries.map((query) => findGcdForQuery(prefixCounts, query));
}

function countExactGcdPairs(frequencies: number[], maximum: number): number[] {
  const exactGcdPairs = new Array<number>(maximum + 1).fill(0);

  for (let gcd = maximum; gcd >= 1; gcd--) {
    let divisibleCount = 0;

    // count numbers divisible by gcd
    for (let multiple = gcd; multiple <= maximum; multiple += gcd) {
      divisibleCount += frequencies[multiple];
    }

    let pairCount = (divisibleCount * (divisibleCount - 1)) / 2;

    // remove pairs with a larger exact gcd
    for (let multiple = gcd * 2; multiple <= maximum; multiple += gcd) {
      pairCount -= exactGcdPairs[multiple];
    }

    exactGcdPairs[gcd] = pairCount;
  }

  return exactGcdPairs;
}

function findGcdForQuery(prefixCounts: number[], query: number): number {
  let left = 1;
  let right = prefixCounts.length - 1;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);

    if (prefixCounts[middle] > query) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
}
