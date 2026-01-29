import { minimumCost } from "./solution";

describe("2976. Minimum Cost to Convert String I", () => {
  it('minimumCost should return 28 for source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]', () => {
    const source = "abcd";
    const target = "acbe";
    const original = ["a", "b", "c", "c", "e", "d"];
    const changed = ["b", "c", "b", "e", "b", "e"];
    const cost = [2, 5, 5, 1, 2, 20];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(28);
  });

  it('minimumCost should return 12 for source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]', () => {
    const source = "aaaa";
    const target = "bbbb";
    const original = ["a", "c"];
    const changed = ["c", "b"];
    const cost = [1, 2];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(12);
  });

  it('minimumCost should return -1 for source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]', () => {
    const source = "abcd";
    const target = "abce";
    const original = ["a"];
    const changed = ["e"];
    const cost = [10000];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(-1);
  });
});
