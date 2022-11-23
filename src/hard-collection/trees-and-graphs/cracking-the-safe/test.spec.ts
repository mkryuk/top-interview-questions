import { crackSafe } from "./solution";

it("crackSafe should return '10' for n = 1, k = 2", () => {
  const n = 1;
  const k = 2;
  const result = crackSafe(n, k);
  expect(result).toEqual("10");
});

it("crackSafe should return '01100' for n = 2, k = 2", () => {
  const n = 2;
  const k = 2;
  const result = crackSafe(n, k);
  expect(result).toEqual("01100");
});
