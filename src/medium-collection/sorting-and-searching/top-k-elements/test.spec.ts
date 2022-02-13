import { topKFrequent } from "./solution";

it("topKFrequent should return [1,2] fort nums = [1,1,1,2,2,3], k = 2", function () {
  const nums = [1, 1, 1, 2, 2, 3],
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
