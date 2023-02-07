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
