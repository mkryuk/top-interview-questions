import { minimumTeachings } from "./solution";

describe("1733. Minimum Number of People to Teach", () => {
  it("minimumTeachings should return 1 for n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]", () => {
    const n = 2;
    const languages = [[1], [2], [1, 2]];
    const friendships = [
      [1, 2],
      [1, 3],
      [2, 3],
    ];
    const result = minimumTeachings(n, languages, friendships);
    expect(result).toEqual(1);
  });

  it("minimumTeachings should return 2 for n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]", () => {
    const n = 3;
    const languages = [[2], [1, 3], [1, 2], [3]];
    const friendships = [
      [1, 4],
      [1, 2],
      [3, 4],
      [2, 3],
    ];
    const result = minimumTeachings(n, languages, friendships);
    expect(result).toEqual(2);
  });
});
