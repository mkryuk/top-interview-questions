import { findEvenNumbers } from "./solution";

describe("Finding 3-Digit Even Numbers", () => {
  it("findEvenNumbers should return [102,120,130,132,210,230,302,310,312,320] for digits = [2,1,3,0]", () => {
    const digits = [2, 1, 3, 0];
    const result = findEvenNumbers(digits);
    expect(result).toEqual([102, 120, 130, 132, 210, 230, 302, 310, 312, 320]);
  });

  it("findEvenNumbers should return [222,228,282,288,822,828,882] for digits = [2,2,8,8,2]", () => {
    const digits = [2, 2, 8, 8, 2];
    const result = findEvenNumbers(digits);
    expect(result).toEqual([222, 228, 282, 288, 822, 828, 882]);
  });

  it("findEvenNumbers should return [] for digits = [3,7,5]", () => {
    const digits = [3, 7, 5];
    const result = findEvenNumbers(digits);
    expect(result).toEqual([]);
  });
});
