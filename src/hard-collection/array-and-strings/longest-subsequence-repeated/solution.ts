export function longestSubsequenceRepeatedK(s: string, k: number): string {
  const n = s.length;

  // count frequencies and collect only chars with freq >= k
  const freq = new Array(26).fill(0);
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }
  const validChars = [];
  for (let c = 0; c < 26; c++) {
    if (freq[c] >= k) {
      validChars.push(String.fromCharCode(97 + c));
    }
  }
  // try lexicographically largest first
  validChars.sort((a, b) => b.localeCompare(a));

  // build nextPos[i][c] = next index ≥ i where s[index] == c, or n if none
  const nextPos: number[][] = Array.from({ length: n + 1 }, () => Array(26).fill(n));
  for (let i = n - 1; i >= 0; i--) {
    for (let c = 0; c < 26; c++) {
      nextPos[i][c] = nextPos[i + 1][c];
    }
    nextPos[i][s.charCodeAt(i) - 97] = i;
  }

  // try lengths from max down to 1
  const maxLen = Math.floor(n / k);
  for (let L = maxLen; L > 0; L--) {
    const ans = dfs(validChars, k, nextPos, L);
    if (ans !== null) {
      return ans;
    }
  }
  return "";
}

// helper: can `prefix` repeated k times be found as a subsequence using nextPos table?
function canMatch(prefix: string, k: number, nextPos: number[][]): boolean {
  let pos = 0;
  const n = nextPos.length - 1;
  for (let rep = 0; rep < k; rep++) {
    for (const ch of prefix) {
      const ci = ch.charCodeAt(0) - 97;
      if (nextPos[pos][ci] === n) {
        return false;
      }
      pos = nextPos[pos][ci] + 1;
    }
  }
  return true;
}

// depth-first search for the lex-largest valid string of length targetLen
// returns the first valid subsequence found, or null if none
function dfs(validChars: string[], k: number, nextPos: number[][], targetLen: number, prefix = ""): string | null {
  if (prefix.length === targetLen) {
    return prefix;
  }
  for (const ch of validChars) {
    const cand = prefix + ch;
    if (canMatch(cand, k, nextPos)) {
      const res = dfs(validChars, k, nextPos, targetLen, cand);
      if (res !== null) {
        return res;
      }
    }
  }
  return null;
}
