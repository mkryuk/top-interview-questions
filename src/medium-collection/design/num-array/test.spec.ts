import { NumArray } from "./solution";

it("NumArray should pass test 1", () => {
  let numArray = new NumArray([1, 3, 5]);
  expect(numArray.sumRange(0, 2)).toEqual(9); // return 1 + 3 + 5 = 9
  numArray.update(1, 2); // nums = [1, 2, 5]
  expect(numArray.sumRange(0, 2)).toEqual(8); // return 1 + 2 + 5 = 8
});

it("NumArray should pass test 2", () => {
  let numArray = new NumArray([1, 3, 5, 2, 4, 7, 9, 10]);
  expect(numArray.sumRange(2, 4)).toEqual(11);
  numArray.update(3, 3);
  expect(numArray.sumRange(0, 2)).toEqual(12);
});
