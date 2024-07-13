import { survivedRobotsHealths } from "./solution";

describe("Robot Collisions", () => {
  it('survivedRobotsHealths should return [2,17,9,15,10] for positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"', () => {
    const positions = [5, 4, 3, 2, 1];
    const healths = [2, 17, 9, 15, 10];
    const directions = "RRRRR";
    const result = survivedRobotsHealths(positions, healths, directions);
    expect(result).toEqual([2, 17, 9, 15, 10]);
  });

  it('survivedRobotsHealths should return [14] for positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"', () => {
    const positions = [3, 5, 2, 6];
    const healths = [10, 10, 15, 12];
    const directions = "RLRL";
    const result = survivedRobotsHealths(positions, healths, directions);
    expect(result).toEqual([14]);
  });

  it('survivedRobotsHealths should return [] for positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL"', () => {
    const positions = [1, 2, 5, 6];
    const healths = [10, 10, 11, 11];
    const directions = "RLRL";
    const result = survivedRobotsHealths(positions, healths, directions);
    expect(result).toEqual([]);
  });
});
