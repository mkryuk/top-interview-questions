import { numberOfStableArrays } from "./solution";

it("numberOfStableArrays should return 2 for zero = 1, one = 1, limit = 2", function () {
  const zero = 1;
  const one = 1;
  const limit = 2;
  const result = numberOfStableArrays(zero, one, limit);
  expect(result).toEqual(2);
});

it("numberOfStableArrays should return 1 for zero = 1, one = 2, limit = 1", function () {
  const zero = 1;
  const one = 2;
  const limit = 1;
  const result = numberOfStableArrays(zero, one, limit);
  expect(result).toEqual(1);
});

it("numberOfStableArrays should return 14 for zero = 3, one = 3, limit = 2", function () {
  const zero = 3;
  const one = 3;
  const limit = 2;
  const result = numberOfStableArrays(zero, one, limit);
  expect(result).toEqual(14);
});
