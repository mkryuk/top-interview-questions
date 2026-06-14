import { mapWordWeights } from "./solution";

describe("3838. Weighted Word Mapping:", () => {
  it('mapWordWeights should return "rij" for the first example', () => {
    const words = ["abcd", "def", "xyz"];
    const weights = [5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2];
    const result = mapWordWeights(words, weights);
    expect(result).toEqual("rij");
  });

  it('mapWordWeights should return "yyy" for the second example', () => {
    const words = ["a", "b", "c"];
    const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const result = mapWordWeights(words, weights);
    expect(result).toEqual("yyy");
  });

  it('mapWordWeights should return "g" for the third example', () => {
    const words = ["abcd"];
    const weights = [7, 5, 3, 4, 3, 5, 4, 9, 4, 2, 2, 7, 10, 2, 5, 10, 6, 1, 2, 2, 4, 1, 3, 4, 4, 5];
    const result = mapWordWeights(words, weights);
    expect(result).toEqual("g");
  });
});
