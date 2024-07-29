import { numTeams } from "./solution";

describe("Count Number of Teams", () => {
  it("numTeams should return 3 for rating = [2,5,3,4,1]", () => {
    const rating = [2, 5, 3, 4, 1];
    const result = numTeams(rating);
    expect(result).toEqual(3);
  });

  it("numTeams should return 0 for rating = [2,1,3]", () => {
    const rating = [2, 1, 3];
    const result = numTeams(rating);
    expect(result).toEqual(0);
  });

  it("numTeams should return 4 for rating = [1,2,3,4]", () => {
    const rating = [1, 2, 3, 4];
    const result = numTeams(rating);
    expect(result).toEqual(4);
  });
});
