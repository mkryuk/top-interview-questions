import { minTimeToReach } from "./solution";

describe("Find Minimum Time to Reach Last Room I", () => {
  it("minTimeToReach should return 6 for moveTime = [[0,4],[4,4]]", () => {
    const moveTime = [
      [0, 4],
      [4, 4],
    ];
    const result = minTimeToReach(moveTime);
    expect(result).toEqual(6);
  });

  it("minTimeToReach should return 3 for moveTime = [[0,0,0],[0,0,0]]", () => {
    const moveTime = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    const result = minTimeToReach(moveTime);
    expect(result).toEqual(3);
  });

  it("minTimeToReach should return 3 for moveTime = [[0,1],[1,2]]", () => {
    const moveTime = [
      [0, 1],
      [1, 2],
    ];
    const result = minTimeToReach(moveTime);
    expect(result).toEqual(3);
  });
});
