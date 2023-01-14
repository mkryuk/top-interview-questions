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
