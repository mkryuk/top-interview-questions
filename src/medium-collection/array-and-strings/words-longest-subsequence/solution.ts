export function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = words.length;

  const dp: number[] = Array(n).fill(1); // longest length ending at i
  const prev: number[] = Array(n).fill(-1); // predecessor for path

  // DP over all index pairs (i < j)
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (groups[i] !== groups[j] && words[i].length === words[j].length && hamming(words[i], words[j]) === 1) {
        if (dp[i] + 1 > dp[j]) {
          dp[j] = dp[i] + 1;
          prev[j] = i;
        }
      }
    }
  }

  // find end of longest subsequence
  let end = 0;
  for (let i = 1; i < n; i++) if (dp[i] > dp[end]) end = i;

  // reconstruct indices
  const idx: number[] = [];
  while (end !== -1) {
    idx.push(end);
    end = prev[end];
  }
  idx.reverse();

  // map to words
  return idx.map((i) => words[i]);
}

// helper: Hamming distance (strings have the same length)
function hamming(a: string, b: string): number {
  let diff = 0;
  for (let k = 0; k < a.length; k++) {
    if (a[k] !== b[k]) {
      diff++;
    }
    if (diff > 1) {
      // early exit; we only care if >1
      return 2;
    }
  }
  return diff;
}
