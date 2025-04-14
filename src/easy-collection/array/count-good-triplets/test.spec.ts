import { countGoodTriplets } from "./solution";

describe("Count Good Triplets", () => {
  it("countGoodTriplets should return 4 for arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3", () => {
    const arr = [3, 0, 1, 1, 9, 7];
    const a = 7;
    const b = 2;
    const c = 3;
    const result = countGoodTriplets(arr, a, b, c);
    expect(result).toEqual(4);
  });

  it("countGoodTriplets should return 0 for arr = [1,1,2,2,3], a = 0, b = 0, c = 1", () => {
    const arr = [1, 1, 2, 2, 3];
    const a = 0;
    const b = 0;
    const c = 1;
    const result = countGoodTriplets(arr, a, b, c);
    expect(result).toEqual(0);
  });
});
