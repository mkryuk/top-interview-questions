import { freqAlphabets } from "./solution";

describe("Decrypt String from Alphabet to Integer Mapping", () => {
  it('freqAlphabets should return "jkab" for s = "10#11#12"', () => {
    const s = "10#11#12";
    const result = freqAlphabets(s);
    expect(result).toEqual("jkab");
  });

  it('freqAlphabets should return "acz" for s = "1326#"', () => {
    const s = "1326#";
    const result = freqAlphabets(s);
    expect(result).toEqual("acz");
  });
});
