import { minimumSize } from "./solution";

describe("Minimum Limit of Balls in a Bag", () => {
  it("minimumSize should return 3 for nums = [9], maxOperations = 2", () => {
    const nums = [9];
    const maxOperations = 2;
    const result = minimumSize(nums, maxOperations);
    expect(result).toEqual(3);
  });

  it("minimumSize should return 2 for nums = [2,4,8,2], maxOperations = 4", () => {
    const nums = [2, 4, 8, 2];
    const maxOperations = 4;
    const result = minimumSize(nums, maxOperations);
    expect(result).toEqual(3);
  });
});
