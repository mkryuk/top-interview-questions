import { maxSlidingWindow } from "./solution-deque";

it("maxSlidingWindow should return [3,3,5,5,6,7] for nums = [1,3,-1,-3,5,3,6,7], k = 3", () => {
  const nums = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;
  expect(maxSlidingWindow(nums, k)).toEqual([3, 3, 5, 5, 6, 7]);
});

it("maxSlidingWindow should return [1] for nums = [1], k = 1", () => {
  const nums = [1];
  const k = 1;
  expect(maxSlidingWindow(nums, k)).toEqual([1]);
});

it("maxSlidingWindow should return [7,4] for nums = [7,2,4], k = 2", () => {
  const nums = [7, 2, 4];
  const k = 2;
  expect(maxSlidingWindow(nums, k)).toEqual([7, 4]);
});
