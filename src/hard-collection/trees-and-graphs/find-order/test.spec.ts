import { findOrder } from "./solution";

it("findOrder should return [0,1] for numCourses = 2, prerequisites = [[1,0]]", () => {
  const numCourses = 2;
  const prerequisites = [[1, 0]];
  const result = findOrder(numCourses, prerequisites);
  expect(result).toEqual([0, 1]);
});

it("findOrder should return [0,2,1,3] for numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]", () => {
  const numCourses = 4;
  const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
  const result = findOrder(numCourses, prerequisites);
  expect(result).toEqual([0, 1, 2, 3]);
});

it("findOrder should return [0] for numCourses = 1, prerequisites = []", () => {
  const numCourses = 1;
  const prerequisites: number[][] = [];
  const result = findOrder(numCourses, prerequisites);
  expect(result).toEqual([0]);
});

it("findOrder should return [0,1,2,3,4,5,6] for numCourses = 7, prerequisites = [[2,0],[3,0],[4,1],[5,1],[4,3],[3,5],[6,2],[6,4]]", () => {
  const numCourses = 7;
  const prerequisites = [
    [2, 0],
    [3, 0],
    [4, 1],
    [5, 1],
    [4, 3],
    [3, 5],
    [6, 2],
    [6, 4],
  ];
  const result = findOrder(numCourses, prerequisites);
  expect(result).toEqual([0, 1, 2, 5, 3, 4, 6]);
});

it("findOrder should return [] for numCourses = 7, prerequisites = [[3,0],[4,1],[5,1],[4,3],[3,5],[6,4],[2,6],[0,2]]", () => {
  const numCourses = 7;
  const prerequisites = [
    [3, 0],
    [4, 1],
    [5, 1],
    [4, 3],
    [3, 5],
    [6, 4],
    [2, 6],
    [0, 2],
  ];
  const result = findOrder(numCourses, prerequisites);
  expect(result).toEqual([]);
});
