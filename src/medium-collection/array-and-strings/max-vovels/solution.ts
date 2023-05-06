export function maxVowels(s: string, k: number): number {
  let vowelCount = 0;
  let maxVowelCount = 0;
  let vowels = new Set<string>(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelCount++;
    }
    if (s[i - k] && vowels.has(s[i - k])) {
      vowelCount--;
    }
    if (vowelCount === k) {
      return k;
    }
    maxVowelCount = Math.max(vowelCount, maxVowelCount);
  }
  return maxVowelCount;
}
