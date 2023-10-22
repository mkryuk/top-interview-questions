import { reachNumber } from "./solution";

describe("Reach a Number:", () => {
  it("reachNumber should return 3 for target = 2", () => {
    const target = 2;
    const result = reachNumber(target);
    expect(result).toEqual(3);
  });

  it("reachNumber should return 2 for target = 3", () => {
    const target = 3;
    const result = reachNumber(target);
    expect(result).toEqual(2);
  });
});
