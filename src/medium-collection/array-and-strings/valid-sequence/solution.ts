export function validSequence(word1: string, word2: string): number[] {
  const n = word1.length;
  const m = word2.length;

  // right[j] is the rightmost possible position where word2[j]
  // can start an exact subsequence matching word2[j...]
  const right = new Array<number>(m).fill(-1);

  let i = n - 1;

  for (let j = m - 1; j >= 0; j--) {
    while (i >= 0 && word1[i] !== word2[j]) {
      i--;
    }

    if (i >= 0) {
      right[j] = i;
      i--;
    }
  }

  const result: number[] = [];
  let j = 0;
  let mismatchUsed = false;

  for (i = 0; i < n && j < m; i++) {
    if (word1[i] === word2[j]) {
      // taking an exact match as early as possible is always optimal
      result.push(i);
      j++;
      continue;
    }

    if (!mismatchUsed && canUseMismatch(i, j, m, right)) {
      // use the one allowed mismatch only when the remaining
      // suffix can still be matched exactly
      result.push(i);
      mismatchUsed = true;
      j++;
    }
  }

  if (j !== m) {
    return [];
  }

  return result;
}

function canUseMismatch(index: number, targetIndex: number, targetLength: number, right: number[]): boolean {
  // no characters remain after this one
  if (targetIndex === targetLength - 1) {
    return true;
  }

  // the exact remainder must be able to start strictly after index
  return right[targetIndex + 1] > index;
}
