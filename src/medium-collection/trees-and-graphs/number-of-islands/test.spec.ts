import { numIslands } from "./solution";

it("numIslands should return 1", function () {
  const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  const result = numIslands(grid);
  expect(result).toEqual(1);
});

it("numIslands should return 3", function () {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  const result = numIslands(grid);
  expect(result).toEqual(3);
});
