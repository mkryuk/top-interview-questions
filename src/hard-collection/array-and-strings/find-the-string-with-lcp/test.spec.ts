import { findTheString } from "./solution";

it('findTheString should return "abab" for lcp = [[4,0,2,0],[0,3,0,1],[2,0,2,0],[0,1,0,1]]', () => {
  const lcp = [
    [4, 0, 2, 0],
    [0, 3, 0, 1],
    [2, 0, 2, 0],
    [0, 1, 0, 1],
  ];
  const result = findTheString(lcp);
  expect(result).toBe("abab");
});

it('findTheString should return "aaaa" for lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,1]]', () => {
  const lcp = [
    [4, 3, 2, 1],
    [3, 3, 2, 1],
    [2, 2, 2, 1],
    [1, 1, 1, 1],
  ];
  const result = findTheString(lcp);
  expect(result).toBe("aaaa");
});

it('findTheString should return "" for lcp = [[4,3,2,1],[3,3,2,1],[2,2,2,1],[1,1,1,3]]', () => {
  const lcp = [
    [4, 3, 2, 1],
    [3, 3, 2, 1],
    [2, 2, 2, 1],
    [1, 1, 1, 3],
  ];
  const result = findTheString(lcp);
  expect(result).toBe("");
});
