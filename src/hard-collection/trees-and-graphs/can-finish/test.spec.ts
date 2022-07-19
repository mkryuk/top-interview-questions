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
