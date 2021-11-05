import { plusOne } from "./solution";

it("plusOne should return [1,2,4] for digits = [1,2,3]", () => {
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  expect(result).toEqual([1, 2, 4]);
});

it("plusOne should return [4,3,2,2] for digits = digits = [4,3,2,1]", () => {
  const digits = [4, 3, 2, 1];
  const result = plusOne(digits);
  expect(result).toEqual([4, 3, 2, 2]);
});

it("plusOne should return [1] for digits = digits = [0]", () => {
  const digits = [0];
  const result = plusOne(digits);
  expect(result).toEqual([1]);
});

it("plusOne should return [1, 0] for digits = [9]", () => {
  const digits = [9];
  const result = plusOne(digits);
  expect(result).toEqual([1, 0]);
});

it("plusOne should return [9,0,0,0] for digits = [8,9,9,9]", () => {
  const digits = [8, 9, 9, 9];
  const result = plusOne(digits);
  expect(result).toEqual([9, 0, 0, 0]);
});

it("plusOne should return [8,9,9,0] for digits = [8,9,8,9]", () => {
  const digits = [8, 9, 8, 9];
  const result = plusOne(digits);
  expect(result).toEqual([8, 9, 9, 0]);
});
