export function maxVowels(s: string, k: number): number {
  let vowelsCount = 0;
  let maxVowelsCount = 0;
  const vowels = new Set<string>(["a", "e", "i", "o", "u"]);

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      vowelsCount++;
    }
  }
  maxVowelsCount = vowelsCount;

  // Slide the window and update the count
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelsCount++;
    }
    if (vowels.has(s[i - k])) {
      vowelsCount--;
    }
    maxVowelsCount = Math.max(vowelsCount, maxVowelsCount);
  }

  return maxVowelsCount;
}
