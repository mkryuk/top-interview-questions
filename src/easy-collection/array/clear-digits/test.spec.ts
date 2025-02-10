import { clearDigits } from "./solution";

describe("Clear Digits", () => {
  it('clearDigits should return "abc" for s = "abc"', () => {
    const s = "abc";
    const result = clearDigits(s);
    expect(result).toEqual("abc");
  });

  it('clearDigits should return "" for s = "cb34"', () => {
    const s = "cb34";
    const result = clearDigits(s);
    expect(result).toEqual("");
  });
});
