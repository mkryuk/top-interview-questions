import { countTriplets } from "./solution";

describe("Count Triplets That Can Form Two Arrays of Equal XOR", () => {
  it("countTriplets should return 4 for arr = [2,3,1,6,7]", () => {
    const arr = [2, 3, 1, 6, 7];
    const result = countTriplets(arr);
    expect(result).toEqual(4);
  });

  it("countTriplets should return 10 for arr = [1,1,1,1,1]", () => {
    const arr = [1, 1, 1, 1, 1];
    const result = countTriplets(arr);
    expect(result).toEqual(10);
  });
});
