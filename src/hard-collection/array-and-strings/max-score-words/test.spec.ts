import { maxScoreWords } from "./solution";

describe("Maximum Score Words Formed by Letters", () => {
  it("maxScoreWords should solve test 1", () => {
    const words = ["dog", "cat", "dad", "good"];
    const letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"];
    const score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = maxScoreWords(words, letters, score);
    expect(result).toEqual(23);
  });

  it("maxScoreWords should solve test 2", () => {
    const words = ["xxxz", "ax", "bx", "cx"];
    const letters = ["z", "a", "b", "c", "x", "x", "x"];
    const score = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10];
    const result = maxScoreWords(words, letters, score);
    expect(result).toEqual(27);
  });

  it("maxScoreWords should solve test 3", () => {
    const words = ["leetcode"];
    const letters = ["l", "e", "t", "c", "o", "d"];
    const score = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
    const result = maxScoreWords(words, letters, score);
    expect(result).toEqual(0);
  });

  it("maxScoreWords should solve test 4", () => {
    const words = ["dad", "dad", "good"];
    const letters = ["a", "a", "c", "d", "d", "d", "d", "o", "o"];
    const score = [2, 0, 9, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = maxScoreWords(words, letters, score);
    expect(result).toEqual(24);
  });

  it("maxScoreWords should solve test 5", () => {
    const words = ["da", "ac", "aba", "abcc", "cadc"];
    const letters = ["a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d"];
    const score = [3, 7, 9, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = maxScoreWords(words, letters, score);
    expect(result).toEqual(49);
  });
});
