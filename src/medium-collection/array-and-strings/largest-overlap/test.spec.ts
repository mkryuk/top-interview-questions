import { largestOverlap } from "./solution";

describe("835. Image Overlap:", () => {
  it("largestOverlap should return 3 for img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]", () => {
    const img1 = [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    const img2 = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ];
    const result = largestOverlap(img1, img2);
    expect(result).toEqual(3);
  });

  it("largestOverlap should return 1 for img1 = [[1]], img2 = [[1]]", () => {
    const img1 = [[1]];
    const img2 = [[1]];
    const result = largestOverlap(img1, img2);
    expect(result).toEqual(1);
  });

  it("largestOverlap should return 0 for img1 = [[0]], img2 = [[0]]", () => {
    const img1 = [[0]];
    const img2 = [[0]];
    const result = largestOverlap(img1, img2);
    expect(result).toEqual(0);
  });
});
