import { kthCharacter } from "./solution";

describe("3307. Find the K-th Character in String Game II", () => {
  it('kthCharacter should return "a" for k = 5, operations = [0,0,0]', () => {
    const k = 5;
    const operations = [0, 0, 0];
    const result = kthCharacter(k, operations);
    expect(result).toEqual("a");
  });

  it('kthCharacter should return "b" for k = 10, operations = [0,1,0,1]', () => {
    const k = 10;
    const operations = [0, 1, 0, 1];
    const result = kthCharacter(k, operations);
    expect(result).toEqual("b");
  });
});
