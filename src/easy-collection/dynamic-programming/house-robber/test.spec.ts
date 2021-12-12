import { rob } from "./solution";

it("rob should return 4 for nums = [1,2,3,1]", function () {
  const nums = [1, 2, 3, 1];
  const result = rob(nums);
  expect(result).toEqual(4);
});

it("rob should return 12 for nums = [2,7,9,3,1]", function () {
  const nums = [2, 7, 9, 3, 1];
  const result = rob(nums);
  expect(result).toEqual(12);
});
