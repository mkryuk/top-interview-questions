export function minimumDistance(word: string): number {
  const n = word.length;
  const memo: number[][][] = Array.from({ length: n }, () => {
    return Array.from({ length: 27 }, () => {
      return Array(27).fill(-1);
    });
  });

  return dfs(0, 26, 26, word, memo);
}

function dfs(index: number, left: number, right: number, word: string, memo: number[][][]): number {
  if (index === word.length) {
    return 0;
  }

  if (memo[index][left][right] !== -1) {
    return memo[index][left][right];
  }

  const target = charToIndex(word[index]);

  // option 1: use left finger to type current character
  const useLeft = getDistance(left, target) + dfs(index + 1, target, right, word, memo);

  // option 2: use right finger to type current character
  const useRight = getDistance(right, target) + dfs(index + 1, left, target, word, memo);

  const result = Math.min(useLeft, useRight);
  memo[index][left][right] = result;

  return result;
}

function charToIndex(ch: string): number {
  return ch.charCodeAt(0) - "A".charCodeAt(0);
}

function getDistance(from: number, to: number): number {
  // 26 means the finger has not been used yet
  if (from === 26) {
    return 0;
  }

  const [r1, c1] = getPosition(from);
  const [r2, c2] = getPosition(to);

  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
}

function getPosition(index: number): [number, number] {
  return [Math.floor(index / 6), index % 6];
}
