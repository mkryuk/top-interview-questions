import { increasingTriplet } from "./solution";

it("increasingTriplet should return true for nums = [1,2,3,4,5]", () => {
  const nums = [1, 2, 3, 4, 5];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return false for nums = [5,4,3,2,1]", () => {
  const nums = [5, 4, 3, 2, 1];
  const result = increasingTriplet(nums);
  expect(result).toBeFalse();
});

it("increasingTriplet should return true for nums = [2,1,5,0,4,6]", () => {
  const nums = [2, 1, 5, 0, 4, 6];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});
