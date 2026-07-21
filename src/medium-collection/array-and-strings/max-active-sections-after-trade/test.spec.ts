import { maxActiveSectionsAfterTrade } from "./solution";

describe("3499. Maximize Active Section with Trade I:", () => {
  it('maxActiveSectionsAfterTrade should return 1 for s = "01"', () => {
    const s = "01";
    const result = maxActiveSectionsAfterTrade(s);
    expect(result).toEqual(1);
  });

  it('maxActiveSectionsAfterTrade should return 4 for s = "0100"', () => {
    const s = "0100";
    const result = maxActiveSectionsAfterTrade(s);
    expect(result).toEqual(4);
  });

  it('maxActiveSectionsAfterTrade should return 7 for s = "1000100"', () => {
    const s = "1000100";
    const result = maxActiveSectionsAfterTrade(s);
    expect(result).toEqual(7);
  });

  it('maxActiveSectionsAfterTrade should return 4 for s = "01010"', () => {
    const s = "01010";
    const result = maxActiveSectionsAfterTrade(s);
    expect(result).toEqual(4);
  });
});
