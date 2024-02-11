export function countSubstrings(s: string): number {
  const n = s.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const substring = s.substring(i, j + 1);
      if (isPalindromic(substring)) {
        result++;
      }
    }
  }
  return result;
}

function isPalindromic(s: string): boolean {
  const n = s.length;
  let first = 0;
  let last = n - 1;
  while (first < last) {
    if (s[first] !== s[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}
