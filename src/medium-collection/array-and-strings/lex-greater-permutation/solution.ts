export function lexGreaterPermutation(s: string, target: string): string {
  const n = s.length;
  const count: number[] = new Array(26).fill(0);
  const result: string[] = new Array(n);

  for (const ch of s) {
    count[ch.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < n; i++) {
    const targetCode = target.charCodeAt(i) - 97;

    // try to keep the prefix equal to target
    if (count[targetCode] > 0) {
      result[i] = target[i];
      count[targetCode]--;
      continue;
    }

    // matching is impossible here, so try making this position larger
    const larger = findNextAvailable(count, targetCode + 1);

    if (larger !== -1) {
      result[i] = String.fromCharCode(97 + larger);
      count[larger]--;
      fillSmallestSuffix(result, i + 1, count);
      return result.join("");
    }

    // no larger character exists here, so backtrack
    return backtrack(result, i - 1, count, target);
  }

  // result equals target, but we need strictly greater
  return backtrack(result, n - 1, count, target);
}

function backtrack(result: string[], start: number, count: number[], target: string): string {
  for (let i = start; i >= 0; i--) {
    // restore the character previously used at this position

    const usedCode = result[i].charCodeAt(0) - 97;
    count[usedCode]++;
    const targetCode = target.charCodeAt(i) - 97;

    // try the smallest available character greater than target[i]
    const larger = findNextAvailable(count, targetCode + 1);
    if (larger === -1) {
      continue;
    }

    result[i] = String.fromCharCode(97 + larger);
    count[larger]--;
    fillSmallestSuffix(result, i + 1, count);
    return result.join("");
  }

  return "";
}

function findNextAvailable(count: number[], start: number): number {
  for (let c = start; c < 26; c++) {
    if (count[c] > 0) {
      return c;
    }
  }

  return -1;
}

function fillSmallestSuffix(result: string[], start: number, count: number[]): void {
  let index = start;

  for (let c = 0; c < 26; c++) {
    while (count[c] > 0) {
      result[index] = String.fromCharCode(97 + c);
      index++;
      count[c]--;
    }
  }
}
