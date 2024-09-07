import { numberToWords } from "./solution";

describe("Integer to English Words", () => {
  it('numberToWords should return "One Hundred Twenty Three" for num = 123', () => {
    const num = 123;
    const result = numberToWords(num);
    expect(result).toEqual("One Hundred Twenty Three");
  });

  it('numberToWords should return "Twelve Thousand Three Hundred Forty Five" for num = 12345', () => {
    const num = 12345;
    const result = numberToWords(num);
    expect(result).toEqual("Twelve Thousand Three Hundred Forty Five");
  });

  it('numberToWords should return "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven" for num = 1234567', () => {
    const num = 1234567;
    const result = numberToWords(num);
    expect(result).toEqual("One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven");
  });
});
