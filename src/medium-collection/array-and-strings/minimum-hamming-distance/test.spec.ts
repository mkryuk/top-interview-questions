import { minimumHammingDistance } from "./solution";

describe("1722. Minimize Hamming Distance After Swap Operations:", () => {
  it("minimumHammingDistance should return 1 for source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]", () => {
    const source = [1, 2, 3, 4];
    const target = [2, 1, 4, 5];
    const allowedSwaps = [
      [0, 1],
      [2, 3],
    ];
    const result = minimumHammingDistance(source, target, allowedSwaps);
    expect(result).toEqual(1);
  });

  it("minimumHammingDistance should return 2 for source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []", () => {
    const source = [1, 2, 3, 4];
    const target = [1, 3, 2, 4];
    const allowedSwaps: number[][] = [];
    const result = minimumHammingDistance(source, target, allowedSwaps);
    expect(result).toEqual(2);
  });

  it("minimumHammingDistance should return 0 for source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]", () => {
    const source = [5, 1, 2, 4, 3];
    const target = [1, 5, 4, 2, 3];
    const allowedSwaps = [
      [0, 4],
      [4, 2],
      [1, 3],
      [1, 4],
    ];
    const result = minimumHammingDistance(source, target, allowedSwaps);
    expect(result).toEqual(0);
  });
});
