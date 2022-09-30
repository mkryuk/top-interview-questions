import { numSquares } from "./solution";

it("numSquares should return 3 for n = 12", () => {
  const n = 12;
  const result = numSquares(n);
  expect(result).toEqual(3);
});

it("numSquares should return 2 for n = 13", () => {
  const n = 13;
  const result = numSquares(n);
  expect(result).toEqual(2);
});
