import { reachNumber } from "./solution-o1";

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

  it("reachNumber should return 2 for target = -3", () => {
    const target = -3;
    const result = reachNumber(target);
    expect(result).toEqual(2);
  });

  it("reachNumber should return 5 for target = 5", () => {
    const target = 5;
    const result = reachNumber(target);
    expect(result).toEqual(5);
  });

  it("reachNumber should return 3 for target = 4", () => {
    const target = 4;
    const result = reachNumber(target);
    expect(result).toEqual(3);
  });
});
