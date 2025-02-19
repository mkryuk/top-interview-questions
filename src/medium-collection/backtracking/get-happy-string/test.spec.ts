import { getHappyString } from "./solution";

describe("The k-th Lexicographical String of All Happy Strings of Length n", () => {
  it('getHappyString should return "c" for n = 1, k = 3', () => {
    const n = 1;
    const k = 3;
    const result = getHappyString(n, k);
    expect(result).toEqual("c");
  });

  it('getHappyString should return "" for n = 1, k = 4', () => {
    const n = 1;
    const k = 4;
    const result = getHappyString(n, k);
    expect(result).toEqual("");
  });

  it('getHappyString should return "cab" for n = 3, k = 9', () => {
    const n = 3;
    const k = 9;
    const result = getHappyString(n, k);
    expect(result).toEqual("cab");
  });
});
