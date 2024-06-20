import { maxDistance } from "./solution";

describe("Magnetic Force Between Two Balls", () => {
  it("maxDistance should return 3 for position = [1,2,3,4,7], m = 3", () => {
    const position = [1, 2, 3, 4, 7];
    const m = 3;
    const result = maxDistance(position, m);
    expect(result).toEqual(3);
  });

  it("maxDistance should return 999999999 for position = [5,4,3,2,1,1000000000], m = 2", () => {
    const position = [5, 4, 3, 2, 1, 1000000000];
    const m = 2;
    const result = maxDistance(position, m);
    expect(result).toEqual(999999999);
  });
});
