import { mostVisited } from "./solution";

describe("Most Visited Sector in a Circular Track:", () => {
  it("mostVisited should return [1,2] for n = 4, rounds = [1,3,1,2]", () => {
    const n = 4;
    const rounds = [1, 3, 1, 2];
    const result = mostVisited(n, rounds);
    expect(result).toEqual([1, 2]);
  });

  it("mostVisited should return [2] for n = 2, rounds = [2,1,2,1,2,1,2,1,2]", () => {
    const n = 2;
    const rounds = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const result = mostVisited(n, rounds);
    expect(result).toEqual([2]);
  });

  it("mostVisited should return [1,2,3,4,5,6,7] for n = 7, rounds = [1,3,5,7]", () => {
    const n = 7;
    const rounds = [1, 3, 5, 7];
    const result = mostVisited(n, rounds);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
