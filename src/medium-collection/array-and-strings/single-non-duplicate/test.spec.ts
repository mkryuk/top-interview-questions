import { singleNonDuplicate } from "./solution";

it("singleNonDuplicate should return 2 for nums = [1,1,2,3,3,4,4,8,8]", () => {
  const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
  const result = singleNonDuplicate(nums);
  expect(result).toEqual(2);
});

it("singleNonDuplicate should return 10 for nums = [3,3,7,7,10,11,11]", () => {
  const nums = [3, 3, 7, 7, 10, 11, 11];
  const result = singleNonDuplicate(nums);
  expect(result).toEqual(10);
});
