export function lexPalindromicPermutation(s: string, target: string): string {
  const n = s.length;
  const counts: number[] = new Array(26).fill(0);

  for (const ch of s) {
    counts[ch.charCodeAt(0) - 97]++;
  }

  let oddCount = 0;
  let middle = "";

  for (let i = 0; i < 26; i++) {
    if (counts[i] % 2 === 1) {
      oddCount++;

      middle = String.fromCharCode(97 + i);
    }
  }

  // a palindrome permutation is impossible
  if (oddCount > n % 2) {
    return "";
  }

  const halfCounts: number[] = counts.map((count) => Math.floor(count / 2));
  const halfLength = Math.floor(n / 2);
  const targetHalf = target.slice(0, halfLength);
  const half = findLowerBoundPermutation(halfCounts, targetHalf);

  if (half === null) {
    return "";
  }

  let palindrome = buildPalindrome(half, middle);
  if (palindrome > target) {
    return palindrome;
  }

  // the half was exactly equal to target's left half,
  // but the complete palindrome wasn't large enough
  const nextHalf = nextPermutation(half);
  if (nextHalf === null) {
    return "";
  }

  palindrome = buildPalindrome(nextHalf, middle);
  return palindrome;
}

function findLowerBoundPermutation(counts: number[], target: string): string | null {
  const result: string[] = [];
  if (buildBoundedHalf(0, counts, target, result)) {
    return result.join("");
  }

  return null;
}

function buildBoundedHalf(position: number, counts: number[], target: string, result: string[]): boolean {
  if (position === target.length) {
    return true;
  }

  const targetIndex = target.charCodeAt(position) - 97;

  // first try to remain equal to target
  if (counts[targetIndex] > 0) {
    counts[targetIndex]--;
    result.push(String.fromCharCode(97 + targetIndex));

    if (buildBoundedHalf(position + 1, counts, target, result)) {
      return true;
    }

    result.pop();
    counts[targetIndex]++;
  }

  // otherwise make this the first greater character
  for (let ch = targetIndex + 1; ch < 26; ch++) {
    if (counts[ch] === 0) {
      continue;
    }

    result.push(String.fromCharCode(97 + ch));
    counts[ch]--;
    appendRemaining(counts, result);

    return true;
  }

  return false;
}

function appendRemaining(counts: number[], result: string[]): void {
  for (let ch = 0; ch < 26; ch++) {
    for (let count = 0; count < counts[ch]; count++) {
      result.push(String.fromCharCode(97 + ch));
    }
  }
}

function buildPalindrome(half: string, middle: string): string {
  const reversed = half.split("").reverse().join("");
  return half + middle + reversed;
}

function nextPermutation(value: string): string | null {
  const chars = value.split("");
  let i = chars.length - 2;
  while (i >= 0 && chars[i] >= chars[i + 1]) {
    i--;
  }

  if (i < 0) {
    return null;
  }

  let j = chars.length - 1;
  while (chars[j] <= chars[i]) {
    j--;
  }

  [chars[i], chars[j]] = [chars[j], chars[i]];

  reverseRange(chars, i + 1, chars.length - 1);

  return chars.join("");
}

function reverseRange(chars: string[], left: number, right: number): void {
  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
}
