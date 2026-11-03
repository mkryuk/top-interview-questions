import { minMoves } from "./solution";

describe("3736. Minimum Moves to Equal Array Elements III:", () => {
  it("minMoves should return 3 for nums = [2,1,3]", () => {
    const nums = [2, 1, 3];
    const result = minMoves(nums);
    expect(result).toEqual(3);
  });

  it("minMoves should return 2 for nums = [4,4,5]", () => {
    const nums = [4, 4, 5];
    const result = minMoves(nums);
    expect(result).toEqual(2);
  });
});
