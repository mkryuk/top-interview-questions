export function shortestPalindrome(s: string): string {
  const reverseStr = s.split("").reverse().join("");
  const combinedStr = s + "#" + reverseStr;

  // compute the LPS (longest prefix which is also suffix) array using KMP
  const lps = computeLPS(combinedStr);

  // the length of the longest palindromic prefix is the last value in the LPS array
  const longestPalindromicPrefix = lps[lps.length - 1];

  // add the remaining suffix in reverse to the front to make the string a palindrome
  const suffix = s.substring(longestPalindromicPrefix);
  const prefixToAdd = suffix.split("").reverse().join("");

  return prefixToAdd + s;
}

function computeLPS(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}
