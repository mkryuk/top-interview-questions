import { minStoneSum } from "./solution";

it("minStoneSum should return 12 for piles = [5,4,9], k = 2", () => {
  const piles = [5, 4, 9];
  const k = 2;
  const result = minStoneSum(piles, k);
  expect(result).toEqual(12);
});

it("minStoneSum should return 12 for piles = [4,3,6,7], k = 3", () => {
  const piles = [4, 3, 6, 7];
  const k = 3;
  const result = minStoneSum(piles, k);
  expect(result).toEqual(12);
});
