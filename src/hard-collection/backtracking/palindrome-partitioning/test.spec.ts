import { partition } from "./solution";

it('partition should return [["a","a","b"],["aa","b"]] for s = "aab"', () => {
  const s = "aab";
  const expected = [
    ["a", "a", "b"],
    ["aa", "b"],
  ];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});

it('partition should return [["a"]] for s = "a"', () => {
  const s = "a";
  const expected = [["a"]];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});
