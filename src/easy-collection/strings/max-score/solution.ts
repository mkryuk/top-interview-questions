export function maxScore(s: string): number {
  let totalZeroes = 0;
  for (const num of s) {
    if (num === "0") {
      totalZeroes++;
    }
  }
  let rightOnes = s.length - totalZeroes;
  let maxScore = 0;
  let leftZeroes = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      leftZeroes++;
    } else {
      rightOnes--;
    }
    maxScore = Math.max(maxScore, leftZeroes + rightOnes);
  }
  return maxScore;
}
