import { reversePrefix } from "./solution";

describe("Reverse Prefix of Word", () => {
  it('reversePrefix should return "dcbaefd" for word = "abcdefd", ch = "d"', () => {
    const word = "abcdefd";
    const ch = "d";
    const result = reversePrefix(word, ch);
    expect(result).toEqual("dcbaefd");
  });

  it('reversePrefix should return "zxyxxe" for word = "xyxzxe", ch = "z"', () => {
    const word = "xyxzxe";
    const ch = "z";
    const result = reversePrefix(word, ch);
    expect(result).toEqual("zxyxxe");
  });

  it('reversePrefix should return "abcd" for word = "abcd", ch = "z"', () => {
    const word = "abcd";
    const ch = "z";
    const result = reversePrefix(word, ch);
    expect(result).toEqual("abcd");
  });
});
