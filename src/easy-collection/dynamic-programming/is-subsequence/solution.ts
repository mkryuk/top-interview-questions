// Function to check if string s is a subsequence of string t
export function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  // Loop through both strings until we reach the end of either
  while (sIndex < s.length && tIndex < t.length) {
    // If the current characters match, move the sIndex forward
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    // Always move the tIndex forward
    tIndex++;
  }

  // If we've reached the end of string s, it's a subsequence of t
  return sIndex === s.length;
}
