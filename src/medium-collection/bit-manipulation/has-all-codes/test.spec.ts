import { hasAllCodes } from "./solution";

describe("1461. Check If a String Contains All Binary Codes of Size K:", () => {
  it('hasAllCodes should return true for s = "00110110", k = 2', () => {
    const s = "00110110";
    const k = 2;
    const result = hasAllCodes(s, k);
    expect(result).toEqual(true);
  });

  it('hasAllCodes should return true for s = "0110", k = 1', () => {
    const s = "0110";
    const k = 1;
    const result = hasAllCodes(s, k);
    expect(result).toEqual(true);
  });

  it('hasAllCodes should return false for s = "0110", k = 2', () => {
    const s = "0110";
    const k = 2;
    const result = hasAllCodes(s, k);
    expect(result).toEqual(false);
  });
});
