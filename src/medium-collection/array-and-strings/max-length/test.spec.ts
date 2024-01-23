import { maxLength } from "./solution";

describe("Maximum Length of a Concatenated String with Unique Characters:", () => {
  it('maxLength should return 4 for arr = ["un","iq","ue"]', () => {
    const arr = ["un", "iq", "ue"];
    const result = maxLength(arr);
    expect(result).toEqual(4);
  });

  it('maxLength should return 6 for arr = ["cha","r","act","ers"]', () => {
    const arr = ["cha", "r", "act", "ers"];
    const result = maxLength(arr);
    expect(result).toEqual(6);
  });

  it('maxLength should return 6 for arr = ["abcdefghijklmnopqrstuvwxyz"]', () => {
    const arr = ["abcdefghijklmnopqrstuvwxyz"];
    const result = maxLength(arr);
    expect(result).toEqual(26);
  });

  it('maxLength should return 0 for ["aa","bb"]', () => {
    const arr = ["aa", "bb"];
    const result = maxLength(arr);
    expect(result).toEqual(0);
  });
});
