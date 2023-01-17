import { getOrder } from "./solution";

it("getOrder should return [0,2,3,1] for tasks = [[1,2],[2,4],[3,2],[4,1]]", () => {
  const tasks = [
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([0, 2, 3, 1]);
});

it("getOrder should return [0,2,3,1,5,4] for tasks = [[1,2],[2,4],[3,2],[4,1],[15,2],[12,1]]", () => {
  const tasks = [
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
    [15, 2],
    [12, 1],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([0, 2, 3, 1, 5, 4]);
});

it("getOrder should return [1,2,0,3] for tasks = [[4,1],[1,2],[3,2],[2,4]]", () => {
  const tasks = [
    [4, 1],
    [1, 2],
    [3, 2],
    [2, 4],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([1, 2, 0, 3]);
});

it("getOrder should return [4,3,2,0,1] for tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]", () => {
  const tasks = [
    [7, 10],
    [7, 12],
    [7, 5],
    [7, 4],
    [7, 2],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([4, 3, 2, 0, 1]);
});

it("getOrder should return [0,5,4,3,1,2] for tasks = [[1,7],[7,10],[7,12],[7,5],[7,4],[7,2]]", () => {
  const tasks = [
    [1, 7],
    [7, 10],
    [7, 12],
    [7, 5],
    [7, 4],
    [7, 2],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([0, 5, 4, 3, 1, 2]);
});

it("getOrder should return [2,5,4,3,0,1] for tasks = [[7,10],[7,12],[1,8],[7,5],[7,4],[7,2]]", () => {
  const tasks = [
    [7, 10],
    [7, 12],
    [1, 8],
    [7, 5],
    [7, 4],
    [7, 2],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([2, 5, 4, 3, 0, 1]);
});

it("getOrder should return [2,5,4,3,0,1] for tasks = [[7,10],[7,12],[7,5],[7,4],[7,2],[1,6]]", () => {
  const tasks = [
    [7, 10],
    [7, 12],
    [7, 5],
    [7, 4],
    [7, 2],
    [1, 6],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([5, 4, 3, 2, 0, 1]);
});

it("getOrder should pass test 14", () => {
  const tasks = [
    [19, 13],
    [16, 9],
    [21, 10],
    [32, 25],
    [37, 4],
    [49, 24],
    [2, 15],
    [38, 41],
    [37, 34],
    [33, 6],
    [45, 4],
    [18, 18],
    [46, 39],
    [12, 24],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([6, 1, 2, 9, 4, 10, 0, 11, 5, 13, 3, 8, 12, 7]);
});

it("getOrder should pass test 38", () => {
  const tasks = [
    [5, 2],
    [7, 2],
    [9, 4],
    [6, 3],
    [5, 10],
    [1, 1],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([5, 0, 1, 3, 2, 4]);
});

it("getOrder should pass test 39", () => {
  const tasks = [
    [5, 6],
    [9, 4],
    [3, 9],
    [3, 7],
    [1, 1],
    [6, 9],
    [9, 1],
  ];
  const result = getOrder(tasks);
  expect(result).toEqual([4, 3, 6, 1, 0, 2, 5]);
});
