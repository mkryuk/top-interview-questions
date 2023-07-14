import { canArrange } from "./solution";

describe("Check If Array Pairs Are Divisible by k:", () => {
  it("canArrange should return true for arr = [1,2,3,4,5,10,6,7,8,9], k = 5", () => {
    const arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
    const k = 5;
    const result = canArrange(arr, k);
    expect(result).toBeTrue();
  });

  it("canArrange should return true for arr = [1,2,3,4,5,6], k = 7", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const k = 7;
    const result = canArrange(arr, k);
    expect(result).toBeTrue();
  });

  it("canArrange should return false for arr = [1,2,3,4,5,6], k = 10", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const k = 10;
    const result = canArrange(arr, k);
    expect(result).toBeFalse();
  });
});
