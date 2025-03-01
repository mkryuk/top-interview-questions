export function shortestCommonSupersequence(str1: string, str2: string): string {
  const m = str1.length;
  const n = str2.length;
  // build the DP table for LCS length
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // recover the LCS string by backtracking through the DP table
  let i = m;
  let j = n;
  let lcs = "";
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // merge str1 and str2 around the LCS
  let res = "";
  let idx1 = 0;
  let idx2 = 0;
  for (const c of lcs) {
    // Append non-LCS characters from str1
    while (idx1 < str1.length && str1[idx1] !== c) {
      res += str1[idx1++];
    }
    // append non-LCS characters from str2
    while (idx2 < str2.length && str2[idx2] !== c) {
      res += str2[idx2++];
    }
    // append the common character and move both pointers
    res += c;
    idx1++;
    idx2++;
  }
  // append any remaining parts from both strings
  res += str1.slice(idx1) + str2.slice(idx2);

  return res;
}
