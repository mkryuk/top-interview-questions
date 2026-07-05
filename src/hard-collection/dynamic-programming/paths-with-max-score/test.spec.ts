import { pathsWithMaxScore } from "./solution";

describe("1301. Number of Paths with Max Score:", () => {
  it('pathsWithMaxScore should return [7,1] for board = ["E23","2X2","12S"]', () => {
    const board = ["E23", "2X2", "12S"];
    const result = pathsWithMaxScore(board);
    expect(result).toEqual([7, 1]);
  });

  it('pathsWithMaxScore should return [4,2] for board = ["E12","1X1","21S"]', () => {
    const board = ["E12", "1X1", "21S"];
    const result = pathsWithMaxScore(board);
    expect(result).toEqual([4, 2]);
  });

  it('pathsWithMaxScore should return [0,0] for board = ["E11","XXX","11S"]', () => {
    const board = ["E11", "XXX", "11S"];
    const result = pathsWithMaxScore(board);
    expect(result).toEqual([0, 0]);
  });
});
