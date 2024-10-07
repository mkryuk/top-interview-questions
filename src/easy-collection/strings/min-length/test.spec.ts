import { minLength } from "./solution";

describe("Minimum String Length After Removing Substrings", () => {
  it('minLength should return 2 for s = "ABFCACDB"', () => {
    const s = "ABFCACDB";
    const result = minLength(s);
    expect(result).toEqual(2);
  });

  it('minLength should return 5 for s = "ACBBD"', () => {
    const s = "ACBBD";
    const result = minLength(s);
    expect(result).toEqual(5);
  });
});
