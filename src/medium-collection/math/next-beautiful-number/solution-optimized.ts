export function nextBeautifulNumber(n: number): number {
  // precompute once, then reuse across calls if needed
  const all = generateAllBalancedUpToLen7();
  return firstGreater(all, n);
}

function generateAllBalancedUpToLen7(): number[] {
  // generate all subsets of digits 1..7 whose sum <= 7
  const candidates: number[] = [];
  const digits: number[] = [1, 2, 3, 4, 5, 6, 7];

  // backtrack over inclusion/exclusion with running sum
  function dfsSubset(idx: number, picked: number[], sum: number): void {
    if (sum > 7) {
      return;
    }
    if (idx === digits.length) {
      if (picked.length > 0) {
        // build a multiset (array) with each picked digit 'd' repeated 'd' times
        const multiset: number[] = expandMultiset(picked);
        // generate all unique permutations of the multiset
        generatePermutations(multiset, candidates);
      }
      return;
    }

    // skip this digit
    dfsSubset(idx + 1, picked, sum);

    // take this digit
    picked.push(digits[idx]);
    dfsSubset(idx + 1, picked, sum + digits[idx]);
    picked.pop();
  }

  dfsSubset(0, [], 0);

  // de-duplicate and sort
  const unique = Array.from(new Set(candidates));
  unique.sort((a, b) => a - b);
  return unique;
}

// expand picked digits like [1,3] -> [1,3,3,3]
function expandMultiset(picked: number[]): number[] {
  const out: number[] = [];
  for (const d of picked) {
    for (let i = 0; i < d; i += 1) {
      out.push(d);
    }
  }
  return out;
}

// generate all unique permutations of multiset and push as numbers
function generatePermutations(multiset: number[], sink: number[]): void {
  // count occurrences of each digit 1..7
  const counts: number[] = new Array(8).fill(0);
  for (const d of multiset) {
    counts[d] += 1;
  }

  const len: number = multiset.length;
  const current: number[] = [];

  function backtrack(): void {
    if (current.length === len) {
      // build integer value without leading zero (there is no zero anyway)
      let val = 0;
      for (let i = 0; i < len; i += 1) {
        val = val * 10 + current[i];
      }
      sink.push(val);
      return;
    }

    // try digits in ascending order to keep generation stable
    for (let d = 1; d <= 7; d += 1) {
      if (counts[d] > 0) {
        counts[d] -= 1;
        current.push(d);
        {
          backtrack();
        }
        current.pop();
        counts[d] += 1;
      }
    }
  }

  backtrack();
}

// binary search for first element strictly greater than target
function firstGreater(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length; // exclusive
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (arr[mid] > target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  // problem guarantees an answer exists; among 7-digit balanced numbers we have 7777777 at least
  return arr[lo];
}
