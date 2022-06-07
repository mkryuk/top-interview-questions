import { findDuplicate } from "./solution-cycle";

it("findDuplicate should return 2 for nums = [1,3,4,2,2]", () => {
  const nums = [1, 3, 4, 2, 2];
  expect(findDuplicate(nums)).toBe(2);
});

it("findDuplicate should return 3 for nums = [3,1,3,4,2]", () => {
  const nums = [3, 1, 3, 4, 2];
  expect(findDuplicate(nums)).toBe(3);
});

it("findDuplicate should return 13 for nums = [13,46,8,11,20,17,40,13,13,13,14,1,13,36,48,41,13,13,13,13,45,13,28,42,13,10,15,22,13,13,13,13,23,9,6,13,47,49,16,13,13,39,35,13,32,29,13,25,30,13]", () => {
  const nums = [
    13, 46, 8, 11, 20, 17, 40, 13, 13, 13, 14, 1, 13, 36, 48, 41, 13, 13, 13,
    13, 45, 13, 28, 42, 13, 10, 15, 22, 13, 13, 13, 13, 23, 9, 6, 13, 47, 49,
    16, 13, 13, 39, 35, 13, 32, 29, 13, 25, 30, 13,
  ];
  expect(findDuplicate(nums)).toBe(13);
});

it("findDuplicate should return 9 for nums = [2,5,9,6,9,3,8,9,7,1]", () => {
  const nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
  expect(findDuplicate(nums)).toBe(9);
});
