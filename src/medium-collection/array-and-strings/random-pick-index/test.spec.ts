import { Solution } from "./solution";

describe("Random Pick Index", () => {
  let solution: Solution;
  const nums = [1, 2, 3, 3, 3];

  beforeEach(() => {
    solution = new Solution(nums);
  });

  it("should initialize the object with the given array", () => {
    expect(solution).toBeDefined();
  });

  it("should return a random index of the target number that exists in the array", () => {
    const target = 3;
    const result = solution.pick(target); // It should return either index 2, 3, or 4 randomly.
    expect(nums[result]).toEqual(target);
  });

  it("should return the index of the target number that is unique in the array", () => {
    const target = 1;
    const result = solution.pick(target); // It should return 0. Since in the array only nums[0] is equal to 1.
    expect(result).toEqual(0);
  });

  it("should have equal probability of returning for multiple valid indices", () => {
    const target = 3;
    const results = Array(10)
      .fill(0)
      .map(() => solution.pick(target));
    const uniqueResults = Array.from(new Set(results));
    const resultCounts = uniqueResults.map(
      (result) => results.filter((r) => r === result).length,
    );
    resultCounts.forEach((count) => expect(count).toBeGreaterThan(0));
  });
});
