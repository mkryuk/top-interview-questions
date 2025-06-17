import { countGoodArrays } from "./solution";

describe("3405. Count the Number of Arrays with K Matching Adjacent Elements", () => {
  it("countGoodArrays should return 4 for n = 3, m = 2, k = 1", () => {
    const n = 3;
    const m = 2;
    const k = 1;
    const result = countGoodArrays(n, m, k);
    expect(result).toEqual(4);
  });

  it("countGoodArrays should return 6 for n = 4, m = 2, k = 2", () => {
    const n = 4;
    const m = 2;
    const k = 2;
    const result = countGoodArrays(n, m, k);
    expect(result).toEqual(6);
  });

  it("countGoodArrays should return 2 for n = 5, m = 2, k = 0", () => {
    const n = 5;
    const m = 2;
    const k = 0;
    const result = countGoodArrays(n, m, k);
    expect(result).toEqual(2);
  });
});
