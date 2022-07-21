import { canFinish } from "./solution";

it("canFinish should return true for numCourses = 2, prerequisites = [[1,0]]", () => {
  const numCourses = 2;
  const prerequisites = [[1, 0]];
  const result = canFinish(numCourses, prerequisites);
  expect(result).toBe(true);
});

it("canFinish should return false for numCourses = 2, prerequisites = [[1,0],[0,1]]", () => {
  const numCourses = 2;
  const prerequisites = [
    [1, 0],
    [0, 1],
  ];
  const result = canFinish(numCourses, prerequisites);
  expect(result).toBe(false);
});

it("canFinish should return true for numCourses = 2, prerequisites = []", () => {
  const numCourses = 2;
  const prerequisites: number[][] = [];
  const result = canFinish(numCourses, prerequisites);
  expect(result).toBe(true);
});

it("canFinish should return true for numCourses = 9, prerequisites = [[8,4],[4,5],[5,3],[3,2],[7,1],[1,6]]", () => {
  const numCourses = 9;
  const prerequisites = [
    [4, 5],
    [8, 4],
    [5, 3],
    [1, 6],
    [7, 1],
    [3, 2],
  ];
  const result = canFinish(numCourses, prerequisites);
  expect(result).toBe(true);
});

it("canFinish should return false for numCourses = 9, prerequisites = [[8,4],[4,5],[5,3],[3,2],[3,8],[7,1],[1,6]]", () => {
  const numCourses = 9;
  const prerequisites = [
    [4, 5],
    [8, 4],
    [3, 8],
    [5, 3],
    [1, 6],
    [7, 1],
    [3, 2],
  ];
  const result = canFinish(numCourses, prerequisites);
  expect(result).toBe(false);
});
