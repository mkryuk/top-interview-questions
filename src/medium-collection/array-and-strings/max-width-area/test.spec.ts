import { maxWidthOfVerticalArea } from "./solution";

describe("Widest Vertical Area Between Two Points Containing No Points:", () => {
  it("maxWidthOfVerticalArea should return 1 for points = [[8,7],[9,9],[7,4],[9,7]]", () => {
    const points = [
      [8, 7],
      [9, 9],
      [7, 4],
      [9, 7],
    ];
    const result = maxWidthOfVerticalArea(points);
    expect(result).toEqual(1);
  });

  it("maxWidthOfVerticalArea should return 3 for points = [[8,7],[9,9],[7,4],[9,7]]", () => {
    const points = [
      [3, 1],
      [9, 0],
      [1, 0],
      [1, 4],
      [5, 3],
      [8, 8],
    ];
    const result = maxWidthOfVerticalArea(points);
    expect(result).toEqual(3);
  });
});
