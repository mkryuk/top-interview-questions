import { stoneGameIII } from "./solution";

describe("1406. Stone Game III:", () => {
  it("stoneGameIII should return Bob for stoneValue = [1,2,3,7]", () => {
    const stoneValue = [1, 2, 3, 7];
    const result = stoneGameIII(stoneValue);
    expect(result).toEqual("Bob");
  });

  it("stoneGameIII should return Alice for stoneValue = [1,2,3,-9]", () => {
    const stoneValue = [1, 2, 3, -9];
    const result = stoneGameIII(stoneValue);
    expect(result).toEqual("Alice");
  });

  it("stoneGameIII should return Tie for stoneValue = [1,2,3,6]", () => {
    const stoneValue = [1, 2, 3, 6];
    const result = stoneGameIII(stoneValue);
    expect(result).toEqual("Tie");
  });
});
