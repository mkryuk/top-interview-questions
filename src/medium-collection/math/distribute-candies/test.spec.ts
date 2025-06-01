import { distributeCandies } from "./solution";

describe("Distribute Candies Among Children II", () => {
  it("distributeCandies should return 3 for n = 5, limit = 2", () => {
    const n = 5;
    const limit = 2;
    const result = distributeCandies(n, limit);
    expect(result).toEqual(3);
  });

  it("distributeCandies should return 10 for n = 3, limit = 3", () => {
    const n = 3;
    const limit = 3;
    const result = distributeCandies(n, limit);
    expect(result).toEqual(10);
  });
});
