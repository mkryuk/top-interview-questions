import { uniqueXorTriplets } from "./solution";

describe("3514. Number of Unique XOR Triplets II:", () => {
  it("uniqueXorTriplets should return 2 for nums = [1,3]", () => {
    const nums = [1, 3];
    const result = uniqueXorTriplets(nums);
    expect(result).toEqual(2);
  });

  it("uniqueXorTriplets should return 4 for nums = [6,7,8,9]", () => {
    const nums = [6, 7, 8, 9];
    const result = uniqueXorTriplets(nums);
    expect(result).toEqual(4);
  });
});
