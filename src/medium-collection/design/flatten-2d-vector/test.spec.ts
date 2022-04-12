import { Vector2D } from "./solution";

it("should return [1, 2, 3, true, true, 4, false] for [[1, 2], [3], [4]]", () => {
  const vec = new Vector2D([[1, 2], [3], [4]]);
  expect(vec.next()).toBe(1);
  expect(vec.next()).toBe(2);
  expect(vec.next()).toBe(3);
  expect(vec.hasNext()).toBe(true);
  expect(vec.hasNext()).toBe(true);
  expect(vec.next()).toBe(4);
  expect(vec.hasNext()).toBe(false);
});

it("should return [1, 2, true, 3, true, true, 4, true, 5 false] for [[1, 2], [3], [4, 5]]", () => {
  const vec = new Vector2D([[1, 2], [3], [4, 5]]);
  expect(vec.next()).toBe(1);
  expect(vec.next()).toBe(2);
  expect(vec.hasNext()).toBe(true);
  expect(vec.next()).toBe(3);
  expect(vec.hasNext()).toBe(true);
  expect(vec.hasNext()).toBe(true);
  expect(vec.next()).toBe(4);
  expect(vec.hasNext()).toBe(true);
  expect(vec.next()).toBe(5);
  expect(vec.hasNext()).toBe(false);
});

it("should return [true,1,false] for [[1]]", () => {
  const vec = new Vector2D([[1]]);
  expect(vec.hasNext()).toBe(true);
  expect(vec.next()).toBe(1);
  expect(vec.hasNext()).toBe(false);
});
