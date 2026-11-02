import { minMoves } from "./solution";

describe("453. Minimum Moves to Equal Array Elements:", () => {
  it("minMoves should return 3 for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = minMoves(nums);
    expect(result).toEqual(3);
  });

  it("minMoves should return 0 for nums = [1,1,1]", () => {
    const nums = [1, 1, 1];
    const result = minMoves(nums);
    expect(result).toEqual(0);
  });
});
