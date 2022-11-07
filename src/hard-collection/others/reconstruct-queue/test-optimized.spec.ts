import { reconstructQueue } from "./solution-optimized";

it("reconstructQueue should return [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] for people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]", () => {
  const people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ];
  const result = reconstructQueue(people);
  expect(result).toEqual([
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ]);
});

it("reconstructQueue should return [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]] for people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]", () => {
  const people = [
    [6, 0],
    [5, 0],
    [4, 0],
    [3, 2],
    [2, 2],
    [1, 4],
  ];
  const result = reconstructQueue(people);
  expect(result).toEqual([
    [4, 0],
    [5, 0],
    [2, 2],
    [3, 2],
    [1, 4],
    [6, 0],
  ]);
});
