import { minRemoveToMakeValid } from "./solution";

describe("Minimum Remove to Make Valid Parentheses", () => {
  it('minRemoveToMakeValid should return "lee(t(c)o)de" for s = "lee(t(c)o)de)"', () => {
    const s = "lee(t(c)o)de)";
    const result = minRemoveToMakeValid(s);
    expect(result).toEqual("lee(t(c)o)de");
  });

  it('minRemoveToMakeValid should return "ab(c)d" for s = "a)b(c)d"', () => {
    const s = "a)b(c)d";
    const result = minRemoveToMakeValid(s);
    expect(result).toEqual("ab(c)d");
  });

  it('minRemoveToMakeValid should return "" for s = "))(("', () => {
    const s = "))((";
    const result = minRemoveToMakeValid(s);
    expect(result).toEqual("");
  });
});
