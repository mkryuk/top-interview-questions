export function halvesAreAlike(s: string): boolean {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelsSet = new Set<string>(vowels);
  let leftVowels = 0;
  let rightVowels = 0;
  for (let i = 0, j = s.length / 2; j < s.length; i++, j++) {
    if (vowelsSet.has(s[i])) {
      leftVowels++;
    }
    if (vowelsSet.has(s[j])) {
      rightVowels++;
    }
  }
  return leftVowels === rightVowels;
}
