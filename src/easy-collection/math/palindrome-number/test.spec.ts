import { isPalindrome } from "./solution";

it("isPalindrome should return true for x = 121", () => {
  const x = 121;
  const result = isPalindrome(x);
  expect(result).toEqual(true);
});

it("isPalindrome should return false for x = -121", () => {
  const x = -121;
  const result = isPalindrome(x);
  expect(result).toEqual(false);
});

it("isPalindrome should return false for x = 10", () => {
  const x = 10;
  const result = isPalindrome(x);
  expect(result).toEqual(false);
});

it("isPalindrome should return true for x = 1221", () => {
  const x = 1221;
  const result = isPalindrome(x);
  expect(result).toEqual(true);
});

it("isPalindrome should return false for x = 12320", () => {
  const x = 12320;
  const result = isPalindrome(x);
  expect(result).toEqual(false);
});

it("isPalindrome should return false for x = 12210", () => {
  const x = 12210;
  const result = isPalindrome(x);
  expect(result).toEqual(false);
});

it("isPalindrome should return false for x = 100", () => {
  const x = 100;
  const result = isPalindrome(x);
  expect(result).toEqual(false);
});
