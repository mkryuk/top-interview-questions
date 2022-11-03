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

it('largestNumber should return "5755348419" for nums = [5,48,419,53,57]', () => {
  const nums = [5, 48, 419, 53, 57];
  const result = largestNumber(nums);
  expect(result).toEqual("5755348419");
});

it('largestNumber should return "5755448419" for nums = [5,48,419,54,57]', () => {
  const nums = [5, 48, 419, 54, 57];
  const result = largestNumber(nums);
  expect(result).toEqual("5755448419");
});

it('largestNumber should return "5756548419" for nums = [5,48,419,57,56]', () => {
  const nums = [5, 48, 419, 57, 56];
  const result = largestNumber(nums);
  expect(result).toEqual("5756548419");
});

it('largestNumber should return "343234323" for nums = [34323,3432]', () => {
  const nums = [34323, 3432];
  const result = largestNumber(nums);
  expect(result).toEqual("343234323");
});

it('largestNumber should return "0" for nums = [0,0]', () => {
  const nums = [0, 0];
  const result = largestNumber(nums);
  expect(result).toEqual("0");
});
