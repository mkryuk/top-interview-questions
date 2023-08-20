import { numberOfWeakCharacters } from "./solution";

describe("The Number of Weak Characters in the Game:", () => {
  it("numberOfWeakCharacters should return 0 for properties = [[5,5],[6,3],[3,6]]", () => {
    const properties = [
      [5, 5],
      [6, 3],
      [3, 6],
    ];
    const result = numberOfWeakCharacters(properties);
    expect(result).toEqual(0);
  });

  it("numberOfWeakCharacters should return 1 for properties = [[2,2],[3,3]]", () => {
    const properties = [
      [2, 2],
      [3, 3],
    ];
    const result = numberOfWeakCharacters(properties);
    expect(result).toEqual(1);
  });

  it("numberOfWeakCharacters should return 1 for properties = [[1,5],[10,4],[4,3]]", () => {
    const properties = [
      [1, 5],
      [10, 4],
      [4, 3],
    ];
    const result = numberOfWeakCharacters(properties);
    expect(result).toEqual(1);
  });

  it("numberOfWeakCharacters should return 3 for properties = [[1,5],[10,4],[4,3],[2,6],[11,5]]", () => {
    const properties = [
      [1, 5],
      [10, 4],
      [4, 3],
      [2, 6],
      [11, 5],
    ];
    const result = numberOfWeakCharacters(properties);
    expect(result).toEqual(3);
  });
});
