import { maxActiveSectionsAfterTrade } from "./solution";

describe("3501. Maximize Active Section with Trade II:", () => {
  it('maxActiveSectionsAfterTrade should return [1] for s = "01", queries = [[0,1]]', () => {
    const s = "01";
    const queries = [[0, 1]];
    const result = maxActiveSectionsAfterTrade(s, queries);
    expect(result).toEqual([1]);
  });

  it('maxActiveSectionsAfterTrade should return [4,3,1,1] for s = "0100", queries = [[0,3],[0,2],[1,3],[2,3]]', () => {
    const s = "0100";
    const queries = [
      [0, 3],
      [0, 2],
      [1, 3],
      [2, 3],
    ];
    const result = maxActiveSectionsAfterTrade(s, queries);
    expect(result).toEqual([4, 3, 1, 1]);
  });

  it('maxActiveSectionsAfterTrade should return [6,7,2] for s = "1000100", queries = [[1,5],[0,6],[0,4]]', () => {
    const s = "1000100";
    const queries = [
      [1, 5],
      [0, 6],
      [0, 4],
    ];
    const result = maxActiveSectionsAfterTrade(s, queries);
    expect(result).toEqual([6, 7, 2]);
  });

  it('maxActiveSectionsAfterTrade should return [4,4,2] for s = "01010", queries = [[0,3],[1,4],[1,3]]', () => {
    const s = "01010";
    const queries = [
      [0, 3],
      [1, 4],
      [1, 3],
    ];
    const result = maxActiveSectionsAfterTrade(s, queries);
    expect(result).toEqual([4, 4, 2]);
  });
});
