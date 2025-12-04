import { countCollisions } from "./solution";

describe("2211. Count Collisions on a Road", () => {
  it('countCollisions should return 5 for directions = "RLRSLL"', () => {
    const directions = "RLRSLL";
    const result = countCollisions(directions);
    expect(result).toEqual(5);
  });

  it('countCollisions should return 0 for directions = "LLRR"', () => {
    const directions = "LLRR";
    const result = countCollisions(directions);
    expect(result).toEqual(0);
  });
});
