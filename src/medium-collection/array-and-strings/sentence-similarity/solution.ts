export function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  if (sentence1.length > sentence2.length) {
    return areSentencesSimilar(sentence2, sentence1);
  }

  let words1 = sentence1.split(" ");
  let words2 = sentence2.split(" ");

  let prefixWords = 0;
  let suffixWords = 0;

  while (prefixWords < words1.length && words1[prefixWords] === words2[prefixWords]) {
    prefixWords++;
  }

  while (
    suffixWords < words1.length - prefixWords &&
    words1[words1.length - 1 - suffixWords] === words2[words2.length - 1 - suffixWords]
  ) {
    suffixWords++;
  }

  return prefixWords + suffixWords >= words1.length;
}
