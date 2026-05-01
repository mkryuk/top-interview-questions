import { maxRotateFunction } from "./solution";

describe("396. Rotate Function: ", () => {
  it("maxRotateFunction should pass test 1", () => {
    const nums = [4, 3, 2, 6];
    const result = maxRotateFunction(nums);
    expect(result).toEqual(26);
  });

  it("maxRotateFunction should pass test 2", () => {
    const nums = [100];
    const result = maxRotateFunction(nums);
    expect(result).toEqual(0);
  });
});
