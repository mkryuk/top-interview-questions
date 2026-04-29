import { maximumScore } from "./solution";

describe("3225. Maximum Score From Grid Operations", () => {
  it("maximumScore should return 11 for grid = [[0,0,0,0,0],[0,0,3,0,0],[0,1,0,0,0],[5,0,0,3,0],[0,0,0,0,2]]", () => {
    const grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 3, 0, 0],
      [0, 1, 0, 0, 0],
      [5, 0, 0, 3, 0],
      [0, 0, 0, 0, 2],
    ];

    expect(maximumScore(grid)).toEqual(11);
  });

  it("maximumScore should return 94 for grid = [[10,9,0,0,15],[7,1,0,8,0],[5,20,0,11,0],[0,0,0,1,2],[8,12,1,10,3]]", () => {
    const grid = [
      [10, 9, 0, 0, 15],
      [7, 1, 0, 8, 0],
      [5, 20, 0, 11, 0],
      [0, 0, 0, 1, 2],
      [8, 12, 1, 10, 3],
    ];

    expect(maximumScore(grid)).toEqual(94);
  });
});
