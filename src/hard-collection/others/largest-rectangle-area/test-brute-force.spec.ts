import { largestRectangleArea } from "./solution-brute-force";

fit("largestRectangleArea should return 10 for heights = [2,1,5,6,2,3]", () => {
  const heights = [2, 1, 5, 6, 2, 3];
  const result = largestRectangleArea(heights);
  expect(result).toEqual(10);
});

fit("largestRectangleArea should return 4 for heights = [2,4]", () => {
  const heights = [2, 4];
  const result = largestRectangleArea(heights);
  expect(result).toEqual(4);
});
