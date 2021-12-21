import { hammingWeight } from "./solution";

it("hammingWeight should return 3 for n = 0b1011", () => {
  const n = 0b1011;
  const result = hammingWeight(n);
  expect(result).toEqual(3);
});

it("hammingWeight should return 1 for n = 0b10000000", () => {
  const n = 0b10000000;
  const result = hammingWeight(n);
  expect(result).toEqual(1);
});

it("hammingWeight should return 31 for n = 0b11111111111111111111111111111101", () => {
  const n = 0b11111111111111111111111111111101;
  const result = hammingWeight(n);
  expect(result).toEqual(31);
});
