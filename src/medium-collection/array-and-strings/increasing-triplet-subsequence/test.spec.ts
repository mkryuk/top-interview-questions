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

it("increasingTriplet should return false for nums = [0]", () => {
  const nums = [0];
  const result = increasingTriplet(nums);
  expect(result).toBeFalse();
});

it("increasingTriplet should return false for nums = [0,1]", () => {
  const nums = [0, 1];
  const result = increasingTriplet(nums);
  expect(result).toBeFalse();
});

it("increasingTriplet should return true for nums = [0,1,2]", () => {
  const nums = [0, 1, 2];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [2,0,1,1,0,2]", () => {
  const nums = [2, 0, 1, 1, 0, 2];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [9,7,8,0,6,1,2]", () => {
  const nums = [9, 7, 8, 0, 6, 1, 2];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [9,7,8,0,6,2,0,1,2]", () => {
  const nums = [9, 7, 8, 0, 6, 2, 0, 1, 2];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [9,7,8,0,6,2,0,3]", () => {
  const nums = [9, 7, 8, 0, 6, 2, 0, 3];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [9,7,8,0,6,2,0,2,3]", () => {
  const nums = [9, 7, 8, 0, 6, 2, 0, 2, 3];
  const result = increasingTriplet(nums);
  expect(result).toBeTrue();
});

it("increasingTriplet should return true for nums = [9,7,8,0,6,2,0]", () => {
  const nums = [9, 7, 8, 0, 6, 2, 0];
  const result = increasingTriplet(nums);
  expect(result).toBeFalse();
});
