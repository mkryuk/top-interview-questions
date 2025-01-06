import { minOperations } from "./solution";

describe("Minimum Number of Operations to Move All Balls to Each Box", () => {
  it('minOperations should return [1,1,3] for boxes = "110"', () => {
    const boxes = "110";
    const result = minOperations(boxes);
    expect(result).toEqual([1, 1, 3]);
  });

  it('minOperations should return [11,8,5,4,3,4] for boxes = "001011"', () => {
    const boxes = "001011";
    const result = minOperations(boxes);
    expect(result).toEqual([11, 8, 5, 4, 3, 4]);
  });
});
