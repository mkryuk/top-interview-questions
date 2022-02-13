import { topKFrequent } from "./solution";

it("topKFrequent should return [1,2] fort nums = [1,1,1,2,2,3], k = 2", function () {
  const nums = [1, 1, 1, 2, 2, 3],
    k = 2;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([1, 2]);
});

it("topKFrequent should return [0,2,1] fort nums = [2,1,1,2,2,3,0,0,0,0], k = 3", function () {
  const nums = [2, 1, 1, 2, 2, 3, 0, 0, 0, 0],
    k = 3;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([0, 2, 1]);
});

it("topKFrequent should return [0,2,1] fort nums = [20,1,1,20,20,30,0,0,0,20,0,0,0,0], k = 3", function () {
  const nums = [20, 1, 1, 20, 20, 30, 0, 0, 0, 20, 0, 0, 0, 0],
    k = 3;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([0, 20, 1]);
});

it("topKFrequent should return [-1] fort nums = [-1,-1], k = 1", function () {
  const nums = [-1, -1],
    k = 1;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([-1]);
});

it("topKFrequent should return [1,2] fort nums = [1,2], k = 2", function () {
  const nums = [1, 2],
    k = 2;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([1, 2]);
});

it("topKFrequent should return [1] fort nums = [1], k = 1", function () {
  const nums = [1],
    k = 1;
  const result = topKFrequent(nums, k);
  expect(result).toEqual([1]);
});
