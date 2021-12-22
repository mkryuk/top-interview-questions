import { hammingDistance } from "./solution";

it("hammingDistance should return 2 for x = 1, y = 4", () => {
  const x = 1,
    y = 4;
  const result = hammingDistance(x, y);
  expect(result).toEqual(2);
});

it("hammingDistance should return 1 for x = 3, y = 1", () => {
  const x = 3,
    y = 1;
  const result = hammingDistance(x, y);
  expect(result).toEqual(1);
});

it("hammingDistance should return 0 for x = 2, y = 2", () => {
  const x = 2,
    y = 2;
  const result = hammingDistance(x, y);
  expect(result).toEqual(0);
});
