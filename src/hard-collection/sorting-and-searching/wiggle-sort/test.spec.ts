import { wiggleSort } from "./solution";

it("wiggleSort should sort nums = [1,5,1,1,6,4] as [1,6,1,5,1,4]", () => {
  const nums = [1, 5, 1, 1, 6, 4];
  const expected = [1, 6, 1, 5, 1, 4];
  wiggleSort(nums);
  expect(nums).toEqual(expected);
});

it("wiggleSort should sort nums = [1,3,2,2,3,1] as [2,3,1,3,1,2]", () => {
  const nums = [1, 3, 2, 2, 3, 1];
  const expected = [2, 3, 1, 3, 1, 2];
  wiggleSort(nums);
  expect(nums).toEqual(expected);
});
