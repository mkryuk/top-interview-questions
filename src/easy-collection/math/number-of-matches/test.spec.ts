import { numberOfMatches } from "./solution";

describe("Count of Matches in Tournament:", () => {
  it("numberOfMatches should return 6 for n = 7", () => {
    const n = 7;
    const result = numberOfMatches(n);
    expect(result).toEqual(6);
  });

  it("numberOfMatches should return 13 for n = 14", () => {
    const n = 14;
    const result = numberOfMatches(n);
    expect(result).toEqual(13);
  });
});
