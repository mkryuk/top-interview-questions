import { solution, knows } from "./solution-cached";

it("solution should return 1 for graph = [[1,1,0],[0,1,0],[1,1,1]]", () => {
  const graph = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];
  expect(solution(knows(graph))(graph.length)).toEqual(1);
});

it("solution should return -1 for graph = [[1,0,1],[1,1,0],[0,1,1]]", () => {
  const graph = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];
  expect(solution(knows(graph))(graph.length)).toEqual(-1);
});

it("solution should return -1 for graph = [[1,1],[1,1]]", () => {
  const graph = [
    [1, 1],
    [1, 1],
  ];
  expect(solution(knows(graph))(graph.length)).toEqual(-1);
});

it("solution should return -1 for graph = [[0,0],[0,0]]", () => {
  const graph = [
    [0, 0],
    [0, 0],
  ];
  expect(solution(knows(graph))(graph.length)).toEqual(-1);
});
