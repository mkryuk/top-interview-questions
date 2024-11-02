export function isCircularSentence(sentence: string): boolean {
  const words = sentence.split(" ");
  let word = words[0];
  for (let i = 1; i < words.length; i++) {
    if (word[word.length - 1] !== words[i][0]) {
      return false;
    }
    word = words[i];
  }
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  return firstWord[0] === lastWord[lastWord.length - 1];
}
