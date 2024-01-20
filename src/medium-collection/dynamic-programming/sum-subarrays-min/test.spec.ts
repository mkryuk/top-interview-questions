import { sumSubarrayMins } from "./solution";

describe("Sum of Subarray Minimums", () => {
  it("sumSubarrayMins should return 17 for arr = [3,1,2,4]", () => {
    const arr = [3, 1, 2, 4];
    const result = sumSubarrayMins(arr);
    expect(result).toEqual(17);
  });

  it("sumSubarrayMins should return 444 for arr = [11,81,94,43,3]", () => {
    const arr = [11, 81, 94, 43, 3];
    const result = sumSubarrayMins(arr);
    expect(result).toEqual(444);
  });
});
