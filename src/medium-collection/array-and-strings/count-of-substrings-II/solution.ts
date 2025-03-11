export function countOfSubstrings(word: string, k: number): number {
  const isVowel = (c: string): boolean => c === "a" || c === "e" || c === "i" || c === "o" || c === "u";

  let result = 0;
  let start = 0;
  let end = 0;
  const n = word.length;
  const vowelCount: { [key: string]: number } = {};
  let consonantCount = 0;

  // build the nextConsonant array.
  // nextConsonant[i] will be the next index after i where a consonant appears;
  // if no further consonant exists, it remains n.
  const nextConsonant: number[] = new Array(n);
  let nextConsonantIndex = n;
  for (let i = n - 1; i >= 0; i--) {
    nextConsonant[i] = nextConsonantIndex;
    if (!isVowel(word[i])) {
      nextConsonantIndex = i;
    }
  }

  while (end < n) {
    const newLetter = word[end];
    if (isVowel(newLetter)) {
      vowelCount[newLetter] = (vowelCount[newLetter] || 0) + 1;
    } else {
      consonantCount++;
    }

    // shrink the window from the left if consonantCount exceeds k.
    while (consonantCount > k && start < n) {
      const startLetter = word[start];
      if (isVowel(startLetter)) {
        vowelCount[startLetter]--;
        if (vowelCount[startLetter] === 0) {
          delete vowelCount[startLetter];
        }
      } else {
        consonantCount--;
      }
      start++;
    }

    // when we have exactly k consonants and all vowels (vowelCount has 5 keys),
    // count all valid substrings starting at the current window.
    while (start < n && Object.keys(vowelCount).length === 5 && consonantCount === k) {
      result += nextConsonant[end] - end;
      const startLetter = word[start];
      if (isVowel(startLetter)) {
        vowelCount[startLetter]--;
        if (vowelCount[startLetter] === 0) {
          delete vowelCount[startLetter];
        }
      } else {
        consonantCount--;
      }
      start++;
    }
    end++;
  }

  return result;
}
