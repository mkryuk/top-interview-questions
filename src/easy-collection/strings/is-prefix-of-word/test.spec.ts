import { isPrefixOfWord } from "./solution";

describe("Check If a Word Occurs As a Prefix of Any Word in a Sentence:", () => {
  it('isPrefixOfWord should return 4 for sentence = "i love eating burger", searchWord = "burg"', () => {
    const sentence = "i love eating burger";
    const searchWord = "burg";
    const result = isPrefixOfWord(sentence, searchWord);
    expect(result).toEqual(4);
  });

  it('isPrefixOfWord should return 2 for sentence = "this problem is an easy problem", searchWord = "pro"', () => {
    const sentence = "this problem is an easy problem";
    const searchWord = "pro";
    const result = isPrefixOfWord(sentence, searchWord);
    expect(result).toEqual(2);
  });

  it('isPrefixOfWord should return -1 for sentence = "i am tired", searchWord = "you"', () => {
    const sentence = "i am tired";
    const searchWord = "you";
    const result = isPrefixOfWord(sentence, searchWord);
    expect(result).toEqual(-1);
  });
});
