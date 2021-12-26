import { isValid } from "./solution";

it('isValid should return true for s = "()"', function () {
  const s = "()";
  const result = isValid(s);
  expect(result).toBeTrue();
});

it('isValid should return true for s = "()[]{}"', function () {
  const s = "()[]{}";
  const result = isValid(s);
  expect(result).toBeTrue();
});

it('isValid should return true for s = "{{}[][[[]]]}"', function () {
  const s = "{{}[][[[]]]}";
  const result = isValid(s);
  expect(result).toBeTrue();
});

it('isValid should return false for s = "{{}[][[[]]]}"', function () {
  const s = "{{}[][[[[]]]}";
  const result = isValid(s);
  expect(result).toBeFalse();
});

it('isValid should return false for s = "(]"', function () {
  const s = "(]";
  const result = isValid(s);
  expect(result).toBeFalse();
});
