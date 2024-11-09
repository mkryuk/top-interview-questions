import { minEnd } from "./solution";

describe("Minimum Array End", () => {
  it("minEnd should return 6 for n = 3, x = 4", () => {
    const n = 3;
    const x = 4;
    const result = minEnd(n, x);
    expect(result).toEqual(6);
  });

  it("minEnd should return 15 for n = 2, x = 7", () => {
    const n = 2;
    const x = 7;
    const result = minEnd(n, x);
    expect(result).toEqual(15);
  });
});
