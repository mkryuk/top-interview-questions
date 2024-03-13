import { pivotInteger } from "./solution";

describe("Find the Pivot Integer:", () => {
  it("pivotInteger should return 6 for n = 8", () => {
    const n = 8;
    const result = pivotInteger(n);
    expect(result).toEqual(6);
  });

  it("pivotInteger should return 1 for n = 1", () => {
    const n = 1;
    const result = pivotInteger(n);
    expect(result).toEqual(1);
  });

  it("pivotInteger should return -1 for n = 4", () => {
    const n = 4;
    const result = pivotInteger(n);
    expect(result).toEqual(-1);
  });
});
