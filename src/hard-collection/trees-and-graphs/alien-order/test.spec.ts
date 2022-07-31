import { alienOrder } from "./solution";

it('alienOrder should return "wertf" for words = ["wrt","wrf","er","ett","rftt"]', () => {
  const words = ["wrt", "wrf", "er", "ett", "rftt"];
  const result = alienOrder(words);
  expect(result).toBe("wertf");
});

it('alienOrder should return "zx" for words = ["z","x"]', () => {
  const words = ["z", "x"];
  const result = alienOrder(words);
  expect(result).toBe("zx");
});

it('alienOrder should return "" for words = ["z","x","z"]', () => {
  const words = ["z", "x", "z"];
  const result = alienOrder(words);
  expect(result).toBe("");
});

it('alienOrder should return "ab" for words = ["a","ab","ad"]', () => {
  const words = ["a", "ab", "ad"];
  const result = alienOrder(words);
  expect(result).toBe("abd");
});

it('alienOrder should return "abcdef" for words = ["ab","bc","cde","cdef"]', () => {
  const words = ["ab", "bc", "cde", "cdef"];
  const result = alienOrder(words);
  expect(result).toBe("abcdef");
});

it('alienOrder should return "abcdefgh" for words = ["ab","cd","ef","gh"]', () => {
  const words = ["ab", "cd", "ef", "gh"];
  const result = alienOrder(words);
  expect(result).toBe("abcdefgh");
});

it('alienOrder should return "abcdefghij" for words = ["a","bc","def","ghij"]', () => {
  const words = ["a", "bc", "def", "ghij"];
  const result = alienOrder(words);
  expect(result).toBe("abcdefghij");
});

it('alienOrder should return "abcdef" for words = ["abc","bcd","cde","def"]', () => {
  const words = ["abc", "bcd", "cde", "def"];
  const result = alienOrder(words);
  expect(result).toBe("abcdef");
});
