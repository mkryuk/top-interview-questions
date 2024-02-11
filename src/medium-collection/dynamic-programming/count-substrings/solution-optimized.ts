export function countSubstrings(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes
    count += expandAroundCenter(s, i, i);
    // Even length palindromes
    count += expandAroundCenter(s, i, i + 1);
  }

  return count;
}

function expandAroundCenter(s: string, left: number, right: number): number {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++; // Found a palindrome
    left--; // Expand to the left
    right++; // Expand to the right
  }
  return count;
}
