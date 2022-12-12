import { NumArray } from "./solution";

it("NumArray should pass test 1", () => {
  let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  expect(numArray.sumRange(0, 2)).toEqual(1); // return (-2) + 0 + 3 = 1
  expect(numArray.sumRange(2, 5)).toEqual(-1); // return 3 + (-5) + 2 + (-1) = -1
  expect(numArray.sumRange(0, 5)).toEqual(-3); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
});
