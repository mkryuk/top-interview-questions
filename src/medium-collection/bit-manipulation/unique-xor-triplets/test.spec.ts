import { uniqueXorTriplets } from "./solution";

describe("3513. Number of Unique XOR Triplets I:", () => {
  it("uniqueXorTriplets should return 2 for nums = [1,2]", () => {
    const nums = [1, 2];
    const result = uniqueXorTriplets(nums);
    expect(result).toEqual(2);
  });

  it("uniqueXorTriplets should return 4 for nums = [3,1,2]", () => {
    const nums = [3, 1, 2];
    const result = uniqueXorTriplets(nums);
    expect(result).toEqual(4);
  });
});
