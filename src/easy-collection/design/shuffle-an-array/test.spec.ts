import { Solution } from "./solution";

it("shuffle should shuffle the array", () => {
  const initialArray = [1, 2, 3, 4, 5];
  const instance = new Solution(initialArray);
  const result = instance.shuffle();
  expect(result).not.toEqual(initialArray);
});

it("shuffle should restore the array", () => {
  const initialArray = [1, 2, 3, 4, 5];
  const instance = new Solution(initialArray);
  instance.shuffle();
  const restored = instance.reset();
  expect(restored).toEqual(initialArray);
});
