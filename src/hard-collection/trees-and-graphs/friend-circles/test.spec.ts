import { findCircleNum } from "./solution";

it("findCircleNum should return 1 for isConnected = [[1,1,0],[1,1,1],[0,1,1]]", () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ];
  expect(findCircleNum(isConnected)).toBe(1);
});

it("findCircleNum should return 2 for isConnected = [[1,1,0],[1,1,0],[0,0,1]]", () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];
  expect(findCircleNum(isConnected)).toBe(2);
});

it("findCircleNum should return 3 for isConnected = [[1,0,0],[0,1,0],[0,0,1]]", () => {
  const isConnected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  expect(findCircleNum(isConnected)).toBe(2);
});

it("findCircleNum should return 2 for isConnected = [[1,0,1,0,0],[0,1,0,1,0],[1,0,1,0,0],[0,1,0,1,1],[0,0,0,1,1]]", () => {
  const isConnected = [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ];
  expect(findCircleNum(isConnected)).toBe(2);
});

it("findCircleNum should return 3 for complex graph of 8 nodes", () => {
  // 1-2-3
  //    \
  //     7-4
  // 5-8
  // 6
  const isConnected = [
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 1],
  ];
  expect(findCircleNum(isConnected)).toBe(3);
});
