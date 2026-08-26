import { shortestBeautifulSubstring } from "./solution";

describe("2904. Shortest and Lexicographically Smallest Beautiful String:", () => {
  it('shortestBeautifulSubstring should return "11001" for s = "100011001", k = 3', () => {
    const s = "100011001";
    const k = 3;
    const result = shortestBeautifulSubstring(s, k);
    expect(result).toEqual("11001");
  });

  it('shortestBeautifulSubstring should return "11" for s = "1011", k = 2', () => {
    const s = "1011";
    const k = 2;
    const result = shortestBeautifulSubstring(s, k);
    expect(result).toEqual("11");
  });

  it('shortestBeautifulSubstring should return "" for s = "000", k = 1', () => {
    const s = "000";
    const k = 1;
    const result = shortestBeautifulSubstring(s, k);
    expect(result).toEqual("");
  });
});
