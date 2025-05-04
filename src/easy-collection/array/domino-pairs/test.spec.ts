import { numEquivDominoPairs } from "./solution";

describe("1128. Number of Equivalent Domino Pairs", () => {
  it("numEquivDominoPairs should return 1 for dominoes = [[1,2],[2,1],[3,4],[5,6]]", () => {
    const dominoes = [
      [1, 2],
      [2, 1],
      [3, 4],
      [5, 6],
    ];
    const result = numEquivDominoPairs(dominoes);
    expect(result).toEqual(1);
  });

  it("numEquivDominoPairs should return 3 for dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]", () => {
    const dominoes = [
      [1, 2],
      [1, 2],
      [1, 1],
      [1, 2],
      [2, 2],
    ];
    const result = numEquivDominoPairs(dominoes);
    expect(result).toEqual(3);
  });
});
