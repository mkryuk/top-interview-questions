export function numTilePossibilities(tiles: string): number {
  const freq = new Array(26).fill(0);
  for (const char of tiles) {
    freq[char.charCodeAt(0) - 65]++;
  }
  const result = backtrack(freq);
  return result;
}

function backtrack(freq: number[]): number {
  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) {
      count++;
      freq[i]--;
      count += backtrack(freq);
      freq[i]++;
    }
  }
  return count;
}
