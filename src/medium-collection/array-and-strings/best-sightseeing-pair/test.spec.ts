import { maxScoreSightseeingPair } from "./solution";

describe("Best Sightseeing Pair", () => {
  it("maxScoreSightseeingPair should return 11 for values = [8,1,5,2,6]", () => {
    const values = [8, 1, 5, 2, 6];
    const result = maxScoreSightseeingPair(values);
    expect(result).toEqual(11);
  });

  it("maxScoreSightseeingPair should return 2 for values = [1,2]", () => {
    const values = [1, 2];
    const result = maxScoreSightseeingPair(values);
    expect(result).toEqual(2);
  });
});
