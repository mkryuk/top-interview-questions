export function sortVowels(s: string): string {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelsInAString: string[] = [];
  for (const char of s) {
    if (vowels.has(char)) {
      vowelsInAString.push(char);
    }
  }
  vowelsInAString.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let result: string[] = [];
  let vowelIndex = 0;
  for (const char of s) {
    if (vowels.has(char)) {
      result.push(vowelsInAString[vowelIndex++]);
    } else {
      result.push(char);
    }
  }
  return result.join("");
}
