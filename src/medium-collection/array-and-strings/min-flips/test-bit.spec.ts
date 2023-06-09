import { minFlips } from "./solution-bit";

describe("Minimum Flips to Make a OR b Equal to c:", () => {
  it("minFlips should return 3 for a = 2, b = 6, c = 5", () => {
    const a = 2;
    const b = 6;
    const c = 5;
    const result = minFlips(a, b, c);
    expect(result).toEqual(3);
  });

  it("minFlips should return 1 for a = 4, b = 2, c = 7", () => {
    const a = 4;
    const b = 2;
    const c = 7;
    const result = minFlips(a, b, c);
    expect(result).toEqual(1);
  });

  it("minFlips should return 0 for a = 1, b = 2, c = 3", () => {
    const a = 1;
    const b = 2;
    const c = 3;
    const result = minFlips(a, b, c);
    expect(result).toEqual(0);
  });

  it("minFlips should return 3 for a = 8, b = 3, c = 5", () => {
    const a = 8;
    const b = 3;
    const c = 5;
    const result = minFlips(a, b, c);
    expect(result).toEqual(3);
  });
});
