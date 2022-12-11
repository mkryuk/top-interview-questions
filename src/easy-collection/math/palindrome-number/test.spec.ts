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
