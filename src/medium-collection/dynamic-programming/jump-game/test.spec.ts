import { canJump } from "./solution";

it("canJump should return true for nums = [2,3,1,1,4]", () => {
  const nums = [2, 3, 1, 1, 4];
  const result = canJump(nums);
  expect(result).toBe(true);
});

it("canJump should return false for nums = [3,2,1,0,4]", () => {
  const nums = [3, 2, 1, 0, 4];
  const result = canJump(nums);
  expect(result).toBe(false);
});

it("canJump should return true for nums = [0]", () => {
  const nums = [0];
  const result = canJump(nums);
  expect(result).toBe(true);
});

it("canJump should return true for nums = [2,0]", () => {
  const nums = [2, 0];
  const result = canJump(nums);
  expect(result).toBe(true);
});
