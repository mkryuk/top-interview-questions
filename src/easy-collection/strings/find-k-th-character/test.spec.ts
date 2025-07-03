import { kthCharacter } from "./solution";

describe("3304. Find the K-th Character in String Game I", () => {
  it('kthCharacter should return "b" for k = 5', () => {
    const k = 5;
    const result = kthCharacter(k);
    expect(result).toEqual("b");
  });

  it('kthCharacter should return "c" for k = 10', () => {
    const k = 10;
    const result = kthCharacter(k);
    expect(result).toEqual("c");
  });
});
