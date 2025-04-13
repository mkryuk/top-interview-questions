export function countGoodIntegers(n: number, k: number): number {
  // precompute factorials up to n.
  const fact: number[] = [1];
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }

  const context: Context = {
    n: n,
    k: k,
    fact: fact,
    answer: 0,
  };

  const freq = new Array(10).fill(0);
  rec(context, 0, n, freq);
  return context.answer;
}

interface Context {
  n: number;
  k: number;
  fact: number[];
  answer: number;
}

// perform a depth-first search to enumerate distinct permutations of half of the palindrome.
// it returns true if it finds any permutation that, after mirroring (and including the center if n is odd),
// forms a valid palindrome (with no leading zero) divisible by k.
function dfs(
  half: number[],
  permutation: number[],
  used: boolean[],
  center: number | null,
  n: number,
  k: number,
): boolean {
  if (permutation.length === half.length) {
    // check if the permutation would lead to a palindrome with a leading zero
    if (permutation.length > 0 && permutation[0] === 0) {
      return false;
    }
    // build the full palindrome
    const full: number[] = permutation.slice();
    if (n % 2 === 1 && center !== null) {
      full.push(center);
    }
    for (let i = permutation.length - 1; i >= 0; i--) {
      full.push(permutation[i]);
    }
    // compute the integer value from full array of digits
    let num = 0;
    for (const d of full) {
      num = num * 10 + d;
    }
    return num % k === 0;
  }
  let prev = -1;
  for (let i = 0; i < half.length; i++) {
    if (used[i]) {
      continue;
    }
    // skip duplicate values to only pick one ordering for the same digit at a given position
    if (half[i] === prev) {
      continue;
    }
    used[i] = true;
    permutation.push(half[i]);
    if (dfs(half, permutation, used, center, n, k)) {
      return true;
    }
    permutation.pop();
    used[i] = false;
    prev = half[i];
  }
  return false;
}

// given a frequency distribution (freq) for digits [0-9] that sums to n,
// check if the distribution can form a palindrome and if any arrangement produces a k-palindromic number.
// if so, add the total number of valid n-digit numbers (with no leading zero) from this distribution to context.answer.
function processDistribution(context: Context, freq: number[]): void {
  // first, check if the digits can be rearranged into any palindrome
  if (context.n === 1) {
    // for a 1-digit number the only possibility is a single nonzero digit.
    for (let d = 0; d < 10; d++) {
      if (freq[d] === 1) {
        if (d === 0) {
          return;
        }
        if (d % context.k !== 0) {
          return;
        }
      }
    }
  } else {
    if (context.n % 2 === 0) {
      // even length: all frequencies must be even.
      for (let d = 0; d < 10; d++) {
        if (freq[d] % 2 !== 0) {
          return;
        }
      }
    } else {
      // odd length: exactly one digit must be odd.
      let oddCount = 0;
      for (let d = 0; d < 10; d++) {
        if (freq[d] % 2 !== 0) {
          oddCount++;
        }
      }
      if (oddCount !== 1) {
        return;
      }
    }
  }

  // compute the number of valid n-digit numbers with this frequency distribution.
  // total permutations = n! / (f[0]! * ... * f[9]!)
  let totalPermutations = context.fact[context.n];
  for (let d = 0; d < 10; d++) {
    totalPermutations /= context.fact[freq[d]];
  }
  // but we must exclude numbers with a leading zero.
  let invalidPermutations = 0;
  if (freq[0] > 0) {
    let prod = 1;
    for (let d = 1; d < 10; d++) {
      prod *= context.fact[freq[d]];
    }
    invalidPermutations = context.fact[context.n - 1] / (context.fact[freq[0] - 1] * prod);
  }
  const validCount = totalPermutations - invalidPermutations;
  if (validCount === 0) {
    return;
  }

  // build the "half" multiset from the frequency distribution.
  // for even n, each digit d appears freq[d]/2 times.
  // for odd n, also determine the center digit (the unique one with an odd frequency).
  const half: number[] = [];
  let center: number | null = null;
  if (context.n % 2 === 0) {
    for (let d = 0; d < 10; d++) {
      const count = freq[d] / 2;
      for (let i = 0; i < count; i++) {
        half.push(d);
      }
    }
  } else {
    for (let d = 0; d < 10; d++) {
      const count = Math.floor(freq[d] / 2);
      for (let i = 0; i < count; i++) {
        half.push(d);
      }
      if (freq[d] % 2 === 1) {
        center = d;
      }
    }
  }

  // decide if there exists a way to arrange the half (with center if needed)
  // such that the full palindrome has no leading zero and is divisible by k.
  let foundValidArrangement = false;
  if (half.length === 0) {
    // this happens when n is 1. we already know center is non-null.
    if (center !== null && center !== 0 && center % context.k === 0) {
      foundValidArrangement = true;
    }
  } else {
    // enumerate all distinct permutations of the half.
    // first, sort the half array to ease deduplication.
    half.sort((a, b) => a - b);
    const used = new Array(half.length).fill(false);
    const permutation: number[] = [];
    foundValidArrangement = dfs(half, permutation, used, center, context.n, context.k);
  }
  if (foundValidArrangement) {
    context.answer += validCount;
  }
}

// recursively generate all frequency distributions (multisets) with total sum equal to n.
// freq is an array of length 10 (for digits 0-9). when digit reaches 10 and remaining is 0,
// processDistribution is called on the distribution.
function rec(context: Context, digit: number, remaining: number, freq: number[]): void {
  if (digit === 10) {
    if (remaining === 0) {
      processDistribution(context, freq);
    }
    return;
  }
  for (let countDigit = 0; countDigit <= remaining; countDigit++) {
    freq[digit] = countDigit;
    rec(context, digit + 1, remaining - countDigit, freq);
  }
}
