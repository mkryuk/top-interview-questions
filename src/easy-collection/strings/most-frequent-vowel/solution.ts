export function maxFreqSum(s: string): number {
  const vowel = new Set();
  const map = new Map<string, number>();
  let maxVowel = 0;
  let maxConsonant = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 0);
    }
    map.set(s[i], map.get(s[i])! + 1);
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
      maxVowel = Math.max(maxVowel, map.get(s[i])!);
    } else {
      maxConsonant = Math.max(maxConsonant, map.get(s[i])!);
    }
  }
  return maxVowel + maxConsonant;
}
