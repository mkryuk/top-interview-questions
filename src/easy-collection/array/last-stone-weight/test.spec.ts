import { lastStoneWeight } from "./solution";

describe("Last Stone Weight", () => {
  it("lastStoneWeight should return 1 for stones = [2,7,4,1,8,1]", () => {
    const stones = [2, 7, 4, 1, 8, 1];
    const result = lastStoneWeight(stones);
    expect(result).toEqual(1);
  });

  it("lastStoneWeight should return 1 for stones = [1]", () => {
    const stones = [1];
    const result = lastStoneWeight(stones);
    expect(result).toEqual(1);
  });
});
