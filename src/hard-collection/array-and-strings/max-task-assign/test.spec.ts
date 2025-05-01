import { maxTaskAssign } from "./solution";

describe("Maximum Number of Tasks You Can Assign", () => {
  it("maxTaskAssign should return 3 for tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1", () => {
    const tasks = [3, 2, 1];
    const workers = [0, 3, 3];
    const pills = 1;
    const strength = 1;
    const result = -maxTaskAssign(tasks, workers, pills, strength);
    expect(result).toEqual(3);
  });

  it("maxTaskAssign should return 1 for tasks = [5,4], workers = [0,0,0], pills = 1, strength = 5", () => {
    const tasks = [5, 4];
    const workers = [0, 0, 0];
    const pills = 1;
    const strength = 5;
    const result = -maxTaskAssign(tasks, workers, pills, strength);
    expect(result).toEqual(1);
  });

  it("maxTaskAssign should return 2 for tasks = [10,15,30], workers = [0,10,10,10,10], pills = 3, strength = 10", () => {
    const tasks = [10, 15, 30];
    const workers = [0, 10, 10, 10, 10];
    const pills = 3;
    const strength = 10;
    const result = -maxTaskAssign(tasks, workers, pills, strength);
    expect(result).toEqual(2);
  });
});
