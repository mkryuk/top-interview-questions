import { arrayToList, listToArray } from "../common";
import { isPalindrome } from "./solution-recursive";

it("isPalindrome should return true for head = [1,2,2,1]", function () {
  const head = [1, 2, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTrue();
});

it("isPalindrome should return true for head = [1,2,3,2,1]", function () {
  const head = [1, 2, 3, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTrue();
});

it("isPalindrome should return true for head = [12,1]", function () {
  const head = [1, 1, 2, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalse();
});

it("isPalindrome should return true for head = [12,1]", function () {
  const head = [1, 2, 1, 1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalse();
});

it("isPalindrome should return false for head = [1,2]", function () {
  const head = [1, 2];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeFalse();
});

it("isPalindrome should return true for head = [1]", function () {
  const head = [1];
  const list = arrayToList(head);
  const result = isPalindrome(list);
  expect(result).toBeTrue();
});
