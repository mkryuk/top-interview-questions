import { strangePrinter } from "./solution";

describe("Strange Printer", () => {
  it('strangePrinter should return 2 for s = "aaabbb"', () => {
    const s = "aaabbb";
    const result = strangePrinter(s);
    expect(result).toEqual(2);
  });

  it('strangePrinter should return 2 for  s = "aba"', () => {
    const s = "aba";
    const result = strangePrinter(s);
    expect(result).toEqual(2);
  });

  it('strangePrinter should return 5 for  s = "abcabc"', () => {
    const s = "abcabc";
    const result = strangePrinter(s);
    expect(result).toEqual(5);
  });
});
