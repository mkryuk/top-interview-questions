export function smallestPalindrome(s: string, k: number): string {
  const frequencies = new Array<number>(26).fill(0);

  for (const character of s) {
    const index = character.charCodeAt(0) - 97;
    frequencies[index]++;
  }

  const halfCounts = new Array<number>(26).fill(0);
  let middle = "";
  let halfLength = 0;

  for (let index = 0; index < 26; index++) {
    halfCounts[index] = Math.floor(frequencies[index] / 2);
    halfLength += halfCounts[index];

    if (frequencies[index] % 2 === 1) {
      middle = String.fromCharCode(97 + index);
    }
  }

  // verify that at least k permutations exist
  if (countPermutations(halfCounts, k) < k) {
    return "";
  }

  const leftHalf: string[] = [];

  for (let position = 0; position < halfLength; position++) {
    let selected = false;

    for (let index = 0; index < 26; index++) {
      if (halfCounts[index] === 0) {
        continue;
      }

      // try placing this character at the current position
      halfCounts[index]--;

      const permutations = countPermutations(halfCounts, k);

      if (permutations >= k) {
        leftHalf.push(String.fromCharCode(97 + index));
        selected = true;
        break;
      }

      // skip all palindromes beginning with this prefix
      k -= permutations;
      halfCounts[index]++;
    }

    if (!selected) {
      return "";
    }
  }

  const left = leftHalf.join("");
  const right = left.split("").reverse().join("");

  return left + middle + right;
}

function binomialCapped(n: number, r: number, cap: number): number {
  r = Math.min(r, n - r);

  let result = 1;

  for (let i = 1; i <= r; i++) {
    // calculate c(n - r + i, i) incrementally
    result = Math.floor((result * (n - r + i)) / i);

    if (result >= cap) {
      return cap;
    }
  }

  return result;
}

function countPermutations(counts: number[], cap: number): number {
  let ways = 1;
  let used = 0;

  for (const count of counts) {
    if (count === 0) {
      continue;
    }

    // we only need enough precision to determine whether ways >= cap
    const requiredCombination = Math.ceil(cap / ways);
    const combinations = binomialCapped(used + count, count, requiredCombination);
    ways *= combinations;
    if (ways >= cap) {
      return cap;
    }
    used += count;
  }

  return ways;
}
