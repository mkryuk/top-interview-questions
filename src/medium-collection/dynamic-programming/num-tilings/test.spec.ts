import { numTilings } from "./solution";

it("numTilings should return 5 for n = 3", () => {
  const n = 3;
  const result = numTilings(n);
  expect(result).toEqual(5);
});

it("numTilings should return 1 for n = 1", () => {
  const n = 1;
  const result = numTilings(n);
  expect(result).toEqual(1);
});
