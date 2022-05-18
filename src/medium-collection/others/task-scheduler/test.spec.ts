import { leastInterval } from "./solution";

it('leastInterval should return 8 for tasks = ["A","A","A","B","B","B"], n = 2', () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
});

it('leastInterval should return 6 for tasks = ["A","A","A","B","B","B"], n = 0', () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
});

it('leastInterval should return 16 for tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2', () => {
  expect(
    leastInterval(
      ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
      2,
    ),
  ).toBe(16);
});

it('leastInterval should return 6 for tasks = ["A","A","A","B","B","B"], n = 1', () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 1)).toBe(6);
});
