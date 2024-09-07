import { generate } from "./solution";

it("generate should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] for numRows = 5", function () {
  const numRows = 5;
  const result = generate(numRows);
  expect(result).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
});

it("generate should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],] for numRows = 7", function () {
  const numRows = 7;
  const result = generate(numRows);
  expect(result).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1],
  ]);
});

it("generate should return [[1]] for numRows = 1", function () {
  const numRows = 1;
  const result = generate(numRows);
  expect(result).toEqual([[1]]);
});
