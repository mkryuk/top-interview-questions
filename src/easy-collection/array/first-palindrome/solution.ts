export function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
}

function isPalindrome(word: string): boolean {
  let first = 0;
  let last = word.length - 1;
  while (first < last) {
    if (word[first] !== word[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}
