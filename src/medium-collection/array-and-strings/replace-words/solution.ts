export function replaceWords(dictionary: string[], sentence: string): string {
  dictionary.sort((a, b) => a.length - b.length);
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (const root of dictionary) {
      if (words[i].startsWith(root)) {
        words[i] = root;
        break;
      }
    }
  }
  return words.join(" ");
}
