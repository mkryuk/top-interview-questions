import { palindromePath } from "./solution";

describe("3841. Palindromic Path Queries in a Tree:", () => {
  it("palindromePath should return [true,false] for the chain queries in example 1", () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
    ];
    const s = "aac";
    const queries = ["query 0 2", "update 1 b", "query 0 2"];
    const result = palindromePath(n, edges, s, queries);
    expect(result).toEqual([true, false]);
  });

  it("palindromePath should return [false,false,true] for the star queries in example 2", () => {
    const n = 4;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
    ];
    const s = "abca";
    const queries = ["query 1 2", "update 0 b", "query 2 3", "update 3 a", "query 1 3"];
    const result = palindromePath(n, edges, s, queries);
    expect(result).toEqual([false, false, true]);
  });
});
