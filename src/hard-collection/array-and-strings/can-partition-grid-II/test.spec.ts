import { canPartitionGrid } from "./solution";

it("canPartitionGrid should return true for grid = [[1,4],[2,3]]", () => {
  const grid = [
    [1, 4],
    [2, 3],
  ];

  expect(canPartitionGrid(grid)).toBe(true);
});

it("canPartitionGrid should return true for grid = [[1,2],[3,4]]", () => {
  const grid = [
    [1, 2],
    [3, 4],
  ];

  expect(canPartitionGrid(grid)).toBe(true);
});

it("canPartitionGrid should return false for grid = [[1,2,4],[2,3,5]]", () => {
  const grid = [
    [1, 2, 4],
    [2, 3, 5],
  ];

  expect(canPartitionGrid(grid)).toBe(false);
});

it("canPartitionGrid should return false for grid = [[4,1,8],[3,2,6]]", () => {
  const grid = [
    [4, 1, 8],
    [3, 2, 6],
  ];

  expect(canPartitionGrid(grid)).toBe(false);
});
