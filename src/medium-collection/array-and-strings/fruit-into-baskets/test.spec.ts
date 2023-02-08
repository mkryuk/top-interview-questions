import { totalFruit } from "./solution";

it("totalFruit should return 3 for fruits = [1,2,1]", () => {
  const fruits = [1, 2, 1];
  const result = totalFruit(fruits);
  expect(result).toEqual(3);
});

it("totalFruit should return 3 for fruits = [0,1,2,2]", () => {
  const fruits = [0, 1, 2, 2];
  const result = totalFruit(fruits);
  expect(result).toEqual(3);
});

it("totalFruit should return 4 for fruits = [1,2,3,2,2]", () => {
  const fruits = [1, 2, 3, 2, 2];
  const result = totalFruit(fruits);
  expect(result).toEqual(4);
});

it("totalFruit should return 2 for fruits = [0,1,2,3,4,5,6,7]", () => {
  const fruits = [0, 1, 2, 3, 4, 5, 6, 7];
  const result = totalFruit(fruits);
  expect(result).toEqual(2);
});

it("totalFruit should return 7 for fruits = [0,1,1,0,0,0,0,2,1]", () => {
  const fruits = [0, 1, 1, 0, 0, 0, 0, 2, 1];
  const result = totalFruit(fruits);
  expect(result).toEqual(7);
});

it("totalFruit should return 10 for fruits = [0,1,1,0,0,0,0,2,1,2,1,2,1,1,2,2,1]", () => {
  const fruits = [0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1];
  const result = totalFruit(fruits);
  expect(result).toEqual(10);
});

it("totalFruit should return 13 for fruits = [0,1,1,0,0,0,0,2,0,2,0,2,0,0,2,2,1]", () => {
  const fruits = [0, 1, 1, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 2, 2, 1];
  const result = totalFruit(fruits);
  expect(result).toEqual(13);
});
