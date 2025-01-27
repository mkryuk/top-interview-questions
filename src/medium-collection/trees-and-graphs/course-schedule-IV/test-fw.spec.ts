import { checkIfPrerequisite } from "./solution-fw";

describe("Course Schedule IV", () => {
  it("checkIfPrerequisite should return [false,true] for numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    const queries = [
      [0, 1],
      [1, 0],
    ];
    const result = checkIfPrerequisite(numCourses, prerequisites, queries);
    expect(result).toEqual([false, true]);
  });

  it("checkIfPrerequisite should return [false,false] for numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]", () => {
    const numCourses = 2;
    const prerequisites: number[][] = [];
    const queries = [
      [1, 0],
      [0, 1],
    ];
    const result = checkIfPrerequisite(numCourses, prerequisites, queries);
    expect(result).toEqual([false, false]);
  });

  it("checkIfPrerequisite should return [true,true] for numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]", () => {
    const numCourses = 3;
    const prerequisites = [
      [1, 2],
      [1, 0],
      [2, 0],
    ];
    const queries = [
      [1, 0],
      [1, 2],
    ];
    const result = checkIfPrerequisite(numCourses, prerequisites, queries);
    expect(result).toEqual([true, true]);
  });
});
