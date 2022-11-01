import { largestNumber } from "./solution";

it('largestNumber should return "210" for nums = [10,2]', () => {
  const nums = [10, 2];
  const result = largestNumber(nums);
  expect(result).toEqual("210");
});

it('largestNumber should return "9534330" for nums = [3,30,34,5,9]', () => {
  const nums = [3, 30, 34, 5, 9];
  const result = largestNumber(nums);
  expect(result).toEqual("9534330");
});
