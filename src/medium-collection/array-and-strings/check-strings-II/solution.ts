export function checkStrings(s1: string, s2: string): boolean {
  const evenCount: number[] = new Array(26).fill(0);
  const oddCount: number[] = new Array(26).fill(0);

  for (let i: number = 0; i < s1.length; i++) {
    const idx1: number = s1.charCodeAt(i) - 97;
    const idx2: number = s2.charCodeAt(i) - 97;

    if (i % 2 === 0) {
      evenCount[idx1]++;
      evenCount[idx2]--;
    } else {
      oddCount[idx1]++;
      oddCount[idx2]--;
    }
  }

  for (let i: number = 0; i < 26; i++) {
    if (evenCount[i] !== 0 || oddCount[i] !== 0) {
      return false;
    }
  }

  return true;
}
