import { RandomizedSet } from "./solution";

it("should return [true, false, true, 2, true, false, 2]", () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.remove(2)).toBe(false);
  expect(set.insert(2)).toBe(true);
  expect([1, 2]).toContain(set.getRandom());
  expect(set.remove(1)).toBe(true);
  expect(set.insert(2)).toBe(false);
  expect(set.getRandom()).toBe(2);
});

it("should return [true, true, false, 2, true, 2, true]", () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.insert(2)).toBe(true);
  expect(set.insert(2)).toBe(false);
  expect([1, 2]).toContain(set.getRandom());
  expect(set.remove(1)).toBe(true);
  expect(set.getRandom()).toBe(2);
  expect(set.remove(2)).toBe(true);
});
