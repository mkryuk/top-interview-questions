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
