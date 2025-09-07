import { sumZero } from "./solution";

describe("1304. Find N Unique Integers Sum up to Zero", () => {
  it("sumZero should pass n = 5", () => {
    const n = 5;
    const result = sumZero(n);
    expect(result.reduce((p, n) => p + n, 0)).toEqual(0);
  });

  it("sumZero should pass for n = 3", () => {
    const n = 3;
    const result = sumZero(n);
    expect(result.reduce((p, n) => p + n, 0)).toEqual(0);
  });

  it("sumZero should pass for n = 1", () => {
    const n = 1;
    const result = sumZero(n);
    expect(result.reduce((p, n) => p + n, 0)).toEqual(0);
  });
});
