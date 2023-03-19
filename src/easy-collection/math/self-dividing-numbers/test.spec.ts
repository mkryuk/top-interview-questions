import { selfDividingNumbers } from "./solution";

describe("Self Dividing Numbers", () => {
  it("should return [1,2,3,4,5,6,7,8,9,11,12,15,22] for left = 1, right = 22", () => {
    const left = 1;
    const right = 22;
    const result = selfDividingNumbers(left, right);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });

  it("should return [48,55,66,77] for left=47 right=85", () => {
    const left = 47;
    const right = 85;
    const result = selfDividingNumbers(left, right);
    expect(result).toEqual([48, 55, 66, 77]);
  });
});
