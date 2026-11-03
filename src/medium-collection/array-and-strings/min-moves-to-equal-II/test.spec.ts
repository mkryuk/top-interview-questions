import { minMoves2 } from "./solution";

describe("462. Minimum Moves to Equal Array Elements II:", () => {
  it("minMoves2 should return 2 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = minMoves2(nums);
    expect(result).toEqual(2);
  });

  it("minMoves2 should return 16 for nums = [1,10,2,9]", () => {
    const nums = [1, 10, 2, 9];
    const result = minMoves2(nums);
    expect(result).toEqual(16);
  });
});
