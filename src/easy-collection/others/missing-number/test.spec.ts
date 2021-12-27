import { missingNumber } from "./solution";

it("missingNumber should return 2 for nums = [3,0,1]", function () {
  const nums = [3, 0, 1];
  const result = missingNumber(nums);
  expect(result).toEqual(2);
});

it("missingNumber should return 2 for nums = [0,1]", function () {
  const nums = [0, 1];
  const result = missingNumber(nums);
  expect(result).toEqual(2);
});

it("missingNumber should return 8 for nums = [9,6,4,2,3,5,7,0,1]", function () {
  const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  const result = missingNumber(nums);
  expect(result).toEqual(8);
});
