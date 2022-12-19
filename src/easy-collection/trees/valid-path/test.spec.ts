import { validPath } from "./solution";

it("validPath should return true for n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2", () => {
  const n = 3;
  const edges = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  const source = 0;
  const destination = 2;
  const result = validPath(n, edges, source, destination);
  expect(result).toBeTrue();
});

it("validPath should return false for n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5", () => {
  const n = 6;
  const edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ];
  const source = 0;
  const destination = 5;
  const result = validPath(n, edges, source, destination);
  expect(result).toBeFalse();
});

it("validPath should return true for n = 1, edges = [], source = 0, destination = 0", () => {
  const n = 1;
  const edges: number[][] = [];
  const source = 0;
  const destination = 0;
  const result = validPath(n, edges, source, destination);
  expect(result).toBeTrue();
});
