import { minNumberOperations } from "./solution";

describe("1526. Minimum Number of Increments on Subarrays to Form a Target Array", () => {
  it("minNumberOperations should return 3 for target = [1,2,3,2,1]", () => {
    const target = [1, 2, 3, 2, 1];
    const result = minNumberOperations(target);
    expect(result).toEqual(3);
  });

  it("minNumberOperations should return 4 for target = [3,1,1,2]", () => {
    const target = [3, 1, 1, 2];
    const result = minNumberOperations(target);
    expect(result).toEqual(4);
  });

  it("minNumberOperations should return 7 for target = [3,1,5,4,2]", () => {
    const target = [3, 1, 5, 4, 2];
    const result = minNumberOperations(target);
    expect(result).toEqual(7);
  });
});
