import { trap } from "./solution";

it("trap should return 6 for height = [0,1,0,2,1,0,1,3,2,1,2,1]", () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const result = trap(height);
  expect(result).toEqual(6);
});

it("trap should return 9 for height = [4,2,0,3,2,5]", () => {
  const height = [4, 2, 0, 3, 2, 5];
  const result = trap(height);
  expect(result).toEqual(9);
});

it("trap should return 9 for height = [5,4,2,10,3,2,5]", () => {
  const height = [5, 4, 2, 10, 3, 2, 5];
  const result = trap(height);
  expect(result).toEqual(9);
});
