import { robotWithString } from "./solution";

describe("2434. Using a Robot to Print the Lexicographically Smallest String", () => {
  it('robotWithString should return "azz" for s = "zza"', () => {
    const s = "zza";
    const result = robotWithString(s);
    expect(result).toEqual("azz");
  });

  it('robotWithString should return "abc" for s = "bac"', () => {
    const s = "bac";
    const result = robotWithString(s);
    expect(result).toEqual("abc");
  });

  it('robotWithString should return "addb" for s = "bdda"', () => {
    const s = "bdda";
    const result = robotWithString(s);
    expect(result).toEqual("addb");
  });
});
