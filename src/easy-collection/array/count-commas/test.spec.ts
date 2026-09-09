import { countCommas } from "./solution";

describe("3870. Count Commas in Range:", () => {
  it("countCommas should return 3 for n = 1002", () => {
    const n = 1002;
    const result = countCommas(n);
    expect(result).toEqual(3);
  });

  it("countCommas should return 0 for n = 998", () => {
    const n = 998;
    const result = countCommas(n);
    expect(result).toEqual(0);
  });
});
