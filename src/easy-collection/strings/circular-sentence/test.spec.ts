import { isCircularSentence } from "./solution";

describe("Circular Sentence", () => {
  it('isCircularSentence should return true for sentence = "leetcode exercises sound delightful"', () => {
    const sentence = "leetcode exercises sound delightful";
    const result = isCircularSentence(sentence);
    expect(result).toBeTrue();
  });

  it('isCircularSentence should return true for sentence = "eetcode"', () => {
    const sentence = "eetcode";
    const result = isCircularSentence(sentence);
    expect(result).toBeTrue();
  });

  it('isCircularSentence should return false for sentence = "Leetcode is cool"', () => {
    const sentence = "Leetcode is cool";
    const result = isCircularSentence(sentence);
    expect(result).toBeFalse();
  });
});
