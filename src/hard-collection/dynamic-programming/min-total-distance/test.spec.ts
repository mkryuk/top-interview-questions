import { minimumTotalDistance } from "./solution";

describe("Minimum Total Distance Traveled", () => {
  it("minimumTotalDistance should return 4 for robot = [0,4,6], factory = [[2,2],[6,2]]", () => {
    const robot = [0, 4, 6];
    const factory = [
      [2, 2],
      [6, 2],
    ];
    const result = minimumTotalDistance(robot, factory);
    expect(result).toEqual(4);
  });

  it("minimumTotalDistance should return 2 for robot = [1,-1], factory = [[-2,1],[2,1]]", () => {
    const robot = [1, -1];
    const factory = [
      [-2, 1],
      [2, 1],
    ];
    const result = minimumTotalDistance(robot, factory);
    expect(result).toEqual(2);
  });
});
