import { isPalindrome } from "./solution";

it('isPalindrome should return true for s = "A man, a plan, a canal: Panama"', () => {
  const s = "A man, a plan, a canal: Panama";
  const result = isPalindrome(s);
  expect(result).toBe(true);
});

it('isPalindrome should return false for s = "race a car"', () => {
  const s = "race a car";
  const result = isPalindrome(s);
  expect(result).toBe(false);
});

it('isPalindrome should return true for s = " "', () => {
  const s = " ";
  const result = isPalindrome(s);
  expect(result).toBe(true);
});

it('isPalindrome should return false for s = "0P"', () => {
  const s = "0P";
  const result = isPalindrome(s);
  expect(result).toBe(false);
});
