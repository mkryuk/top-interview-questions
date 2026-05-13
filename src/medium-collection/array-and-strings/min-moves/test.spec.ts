import { minMoves } from "./solution";

describe("1674. Minimum Moves to Make Array Complementary:", () => {
  it("minMoves should return 1 for nums = [1,2,4,3], limit = 4", () => {
    const nums = [1, 2, 4, 3];
    const limit = 4;
    const result = minMoves(nums, limit);
    expect(result).toEqual(1);
  });

  it("minMoves should return 2 for nums = [1,2,2,1], limit = 2", () => {
    const nums = [1, 2, 2, 1];
    const limit = 2;
    const result = minMoves(nums, limit);
    expect(result).toEqual(2);
  });

  it("minMoves should return 0 for nums = [1,2,1,2], limit = 2", () => {
    const nums = [1, 2, 1, 2];
    const limit = 2;
    const result = minMoves(nums, limit);
    expect(result).toEqual(0);
  });
});
