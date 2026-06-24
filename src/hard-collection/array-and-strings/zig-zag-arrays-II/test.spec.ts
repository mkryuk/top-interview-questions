import { zigZagArrays } from "./solution";

describe("3700. Number of ZigZag Arrays II:", () => {
  it("zigZagArrays should return 2 for n = 3, l = 4, r = 5", () => {
    const n = 3;
    const l = 4;
    const r = 5;
    const result = zigZagArrays(n, l, r);

    expect(result).toEqual(2);
  });

  it("zigZagArrays should return 10 for n = 3, l = 1, r = 3", () => {
    const n = 3;
    const l = 1;
    const r = 3;
    const result = zigZagArrays(n, l, r);

    expect(result).toEqual(10);
  });
});
