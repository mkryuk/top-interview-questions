import { maximumElementAfterDecrementingAndRearranging } from "./solution";

describe("Maximum Element After Decreasing and Rearranging:", () => {
  it("maximumElementAfterDecrementingAndRearranging should return 2 for arr = [2,2,1,2,1]", () => {
    const arr = [2, 2, 1, 2, 1];
    const result = maximumElementAfterDecrementingAndRearranging(arr);
    expect(result).toEqual(2);
  });

  it("maximumElementAfterDecrementingAndRearranging should return 3 for arr = [100,1,1000]", () => {
    const arr = [100, 1, 1000];
    const result = maximumElementAfterDecrementingAndRearranging(arr);
    expect(result).toEqual(3);
  });

  it("maximumElementAfterDecrementingAndRearranging should return 5 for arr = [1,2,3,4,5]", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = maximumElementAfterDecrementingAndRearranging(arr);
    expect(result).toEqual(5);
  });
});
