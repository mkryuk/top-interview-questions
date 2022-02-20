import { search } from "./solution";

it("search should return 4 for nums = [4,5,6,7,0,1,2], target = 0", function () {
  const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0;
  const result = search(nums, target);
  expect(result).toEqual(4);
});

it("search should return -1 for nums = [4,5,6,7,0,1,2], target = 3", function () {
  const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 3;
  const result = search(nums, target);
  expect(result).toEqual(-1);
});

it("search should return -1 for nums = [1], target = 0", function () {
  const nums = [1],
    target = 0;
  const result = search(nums, target);
  expect(result).toEqual(-1);
});

it("search should return 1 for nums = [3,1], target = 1", function () {
  const nums = [3, 1],
    target = 1;
  const result = search(nums, target);
  expect(result).toEqual(1);
});
