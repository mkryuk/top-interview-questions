import { minimumCost } from "./solution";

describe("2977. Minimum Cost to Convert String II", () => {
  it('minimumCost should return 28 for source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]', () => {
    const source = "abcd";
    const target = "acbe";
    const original = ["a", "b", "c", "c", "e", "d"];
    const changed = ["b", "c", "b", "e", "b", "e"];
    const cost = [2, 5, 5, 1, 2, 20];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(28);
  });

  it('minimumCost should return 9 for source = "abcdefgh", target = "acdeeghh", original = ["bcd","fgh","thh"], changed = ["cde","thh","ghh"], cost = [1,3,5]', () => {
    const source = "abcdefgh";
    const target = "acdeeghh";
    const original = ["bcd", "fgh", "thh"];
    const changed = ["cde", "thh", "ghh"];
    const cost = [1, 3, 5];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(9);
  });

  it('minimumCost should return -1 for source = "abcdefgh", target = "addddddd", original = ["bcd","defgh"], changed = ["ddd","ddddd"], cost = [100,1578]', () => {
    const source = "abcdefgh";
    const target = "addddddd";
    const original = ["bcd", "defgh"];
    const changed = ["ddd", "ddddd"];
    const cost = [100, 1578];
    const result = minimumCost(source, target, original, changed, cost);
    expect(result).toEqual(-1);
  });
});
