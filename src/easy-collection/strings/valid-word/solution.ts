export function isValid(word: string): boolean {
  // it contains a minimum of 3 characters.
  if (word.length < 3) {
    return false;
  }
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // it includes at least one vowel.
  let hasVowel = false;
  // it includes at least one consonant.
  let hasConsonant = false;
  for (const ch of word) {
    // it contains only digits (0-9), and English letters (uppercase and lowercase).
    if (isDigit(ch)) {
      continue;
    }
    if (isLetter(ch)) {
      if (vowels.has(ch)) {
        hasVowel = true;
      } else {
        hasConsonant = true;
      }
    } else {
      return false;
    }
  }

  return hasVowel && hasConsonant;
}

function isDigit(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

function isLetter(ch: string): boolean {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}
