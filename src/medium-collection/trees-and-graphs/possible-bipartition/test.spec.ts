import { possibleBipartition } from "./solution";

it("possibleBipartition should return true for true for n = 4, dislikes = [[1,2],[1,3],[2,4]]", () => {
  const n = 4;
  const dislikes = [
    [1, 2],
    [1, 3],
    [2, 4],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeTrue();
});

it("possibleBipartition should return false for true for n = 3, dislikes = [[1,2],[1,3],[2,3]]", () => {
  const n = 3;
  const dislikes = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeFalse();
});

it("possibleBipartition should return false for true for n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]", () => {
  const n = 5;
  const dislikes = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 5],
  ];
  const result = possibleBipartition(n, dislikes);
  expect(result).toBeFalse();
});
