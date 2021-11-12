import { reverse } from "./solution";

it("reverse should return 321 for x = 123", () => {
  const x = 123;
  const result = reverse(x);
  expect(result).toBe(321);
});

it("reverse should return -321 for x = -123", () => {
  const x = -123;
  const result = reverse(x);
  expect(result).toBe(-321);
});

it("reverse should return 21 for x = 120", () => {
  const x = 120;
  const result = reverse(x);
  expect(result).toBe(21);
});

it("reverse should return 32 for x = 230", () => {
  const x = 230;
  const result = reverse(x);
  expect(result).toBe(32);
});

it("reverse should return 0 for x = 0", () => {
  const x = 0;
  const result = reverse(x);
  expect(result).toBe(0);
});

it("reverse should return 0 for x = 1534236469", () => {
  const x = 1534236469;
  const result = reverse(x);
  expect(result).toBe(0);
});

it("reverse should return 0 for x = -2^31 - 1", () => {
  const x = -9463847412;
  const result = reverse(x);
  expect(result).toBe(0);
});

it("reverse should return 0 for x = 2^31", () => {
  const x = 8463847412;
  const result = reverse(x);
  expect(result).toBe(0);
});
