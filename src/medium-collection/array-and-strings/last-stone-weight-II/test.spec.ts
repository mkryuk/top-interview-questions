import { lastStoneWeightII } from "./solution";

describe("Last Stone Weight II:", () => {
  it("lastStoneWeightII should return 1 for stones = [2,7,4,1,8,1]", () => {
    const stones = [2, 7, 4, 1, 8, 1];
    const result = lastStoneWeightII(stones);
    expect(result).toEqual(1);
  });

  it("lastStoneWeightII should return 5 for stones = [31,26,33,21,40]", () => {
    const stones = [31, 26, 33, 21, 40];
    const result = lastStoneWeightII(stones);
    expect(result).toEqual(5);
  });
});
