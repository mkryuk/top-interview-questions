import { primeSubOperation } from "./solution";

describe("Prime Subtraction Operation", () => {
  it("primeSubOperation should return true nums = [4,9,6,10]", () => {
    const nums = [4, 9, 6, 10];
    const result = primeSubOperation(nums);
    expect(result).toBeTrue();
  });

  it("primeSubOperation should return true nums = [6,8,11,12]", () => {
    const nums = [6, 8, 11, 12];
    const result = primeSubOperation(nums);
    expect(result).toBeTrue();
  });

  it("primeSubOperation should return false nums = [5,8,3]", () => {
    const nums = [5, 8, 3];
    const result = primeSubOperation(nums);
    expect(result).toBeFalse();
  });
});
