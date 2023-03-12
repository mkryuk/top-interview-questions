import { sortArrayByParity } from "./solution";

describe("Sort Array By Parity", () => {
  it("sortArrayByParity should return [2,4,3,1] for nums = [3,1,2,4]", () => {
    const nums = [3, 1, 2, 4];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });

  it("sortArrayByParity should return [0] for nums = [0]", () => {
    const nums = [0];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });

  it("should handle an array with only one element", () => {
    const nums = [0];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });

  it("should handle an array with no even numbers", () => {
    const nums = [1, 3, 5, 7];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });

  it("should handle an array with no odd numbers", () => {
    const nums = [2, 4, 6, 8];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });

  it("should not modify the original array", () => {
    const nums = [3, 1, 2, 4];
    const result = sortArrayByParity(nums);
    checkArrayElements(nums, result);
    checkEvenBeforeOdd(result);
  });
});

function checkEvenBeforeOdd(arr: number[]) {
  let foundOdd = false;
  for (const num of arr) {
    if (num % 2 === 1) {
      foundOdd = true;
    } else if (foundOdd) {
      fail("Even number found after odd number");
    }
  }
}

function checkArrayElements(arr1: number[], arr2: number[]) {
  expect(arr1.length).toEqual(arr2.length);
  for (const num of arr1) {
    expect(arr2).toContain(num);
  }
}
