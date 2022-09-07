import { wiggleSort } from "./solution-sort";

it("wiggleSort should sort nums = [1,5,1,1,6,4]", () => {
  const nums = [1, 5, 1, 1, 6, 4];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

it("wiggleSort should sort nums = [1,5,1,1,6]", () => {
  const nums = [1, 5, 1, 1, 6];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

it("wiggleSort should sort nums = [1,3,2,2,3,1]", () => {
  const nums = [1, 3, 2, 2, 3, 1];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

it("wiggleSort should sort nums = [2,1,2,2,1,1,5,4,2,2]", () => {
  const nums = [2, 1, 2, 2, 1, 1, 5, 4, 2, 2];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

it("wiggleSort should sort nums = [1,4,3,4,1,2,1,3,1,3,2,3,3]", () => {
  const nums = [1, 4, 3, 4, 1, 2, 1, 3, 1, 3, 2, 3, 3];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

it("wiggleSort should sort nums = [10,1,7,2,10,5,8,4,9,4,10,8,8,1,5,6,8,9,2,1]", () => {
  const nums = [10, 1, 7, 2, 10, 5, 8, 4, 9, 4, 10, 8, 8, 1, 5, 6, 8, 9, 2, 1];
  wiggleSort(nums);
  expect(checkIsWiggle(nums)).toBeTrue();
});

function checkIsWiggle(arr: number[]): boolean {
  if (arr.length < 2) {
    return true;
  }
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 1 && arr[i] <= arr[i - 1]) {
      return false;
    } else if (i % 2 === 0 && arr[i] >= arr[i - 1]) {
      return false;
    }
  }
  return true;
}
