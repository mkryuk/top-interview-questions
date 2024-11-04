export function compressedString(word: string): string {
  const result: string[] = [];
  for (let i = 0; i < word.length; ) {
    let count = 1;
    while (i < word.length && word[i] === word[i + count] && count < 9) {
      count++;
    }
    result.push(count + word[i]);
    i += count;
  }
  return result.join("");
}
