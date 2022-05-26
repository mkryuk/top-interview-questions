import { maxArea } from "./solution";

it("maxArea should return 49 for height = [1,8,6,2,5,4,8,3,7]", () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  expect(maxArea(height)).toBe(49);
});

it("maxArea should return 1 for height = [1,1]", () => {
  const height = [1, 1];
  expect(maxArea(height)).toBe(1);
});
