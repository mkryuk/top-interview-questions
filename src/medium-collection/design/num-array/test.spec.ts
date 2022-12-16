import { NumArray } from "./solution";

it("NumArray should pass test 1", () => {
  let numArray = new NumArray([1, 3, 5]);
  let result = numArray.sumRange(0, 2);
  expect(result).toEqual(9); // return 1 + 3 + 5 = 9
  numArray.update(1, 2); // nums = [1, 2, 5]
  result = numArray.sumRange(0, 2);
  expect(result).toEqual(8); // return 1 + 2 + 5 = 8
});

it("NumArray should pass test 2", () => {
  let numArray = new NumArray([1, 3, 5, 7]);
  let result = numArray.sumRange(0, 3);
  expect(result).toEqual(16);
  numArray.update(1, 2);
  result = numArray.sumRange(0, 2);
  expect(result).toEqual(8);
});

it("NumArray should pass test 3", () => {
  let numArray = new NumArray([1, 3, 5, 2, 4, 7, 9, 10]);
  let result = numArray.sumRange(2, 4);
  expect(result).toEqual(11);
  numArray.update(3, 3);
  result = numArray.sumRange(0, 3);
  expect(result).toEqual(12);
});
