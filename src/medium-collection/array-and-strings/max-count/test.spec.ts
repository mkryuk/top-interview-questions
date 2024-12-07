import { maxCount } from "./solution";

describe("Maximum Number of Integers to Choose From a Range I", () => {
  it("maxCount should return 2 for banned = [1,6,5], n = 5, maxSum = 6", () => {
    const banned = [1, 6, 5];
    const n = 5;
    const maxSum = 6;
    const result = maxCount(banned, n, maxSum);
    expect(result).toEqual(2);
  });

  it("maxCount should return 0 for banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1", () => {
    const banned = [1, 2, 3, 4, 5, 6, 7];
    const n = 8;
    const maxSum = 1;
    const result = maxCount(banned, n, maxSum);
    expect(result).toEqual(0);
  });

  it("maxCount should return 7 for banned = [11], n = 7, maxSum = 50", () => {
    const banned = [11];
    const n = 7;
    const maxSum = 50;
    const result = maxCount(banned, n, maxSum);
    expect(result).toEqual(7);
  });
});
