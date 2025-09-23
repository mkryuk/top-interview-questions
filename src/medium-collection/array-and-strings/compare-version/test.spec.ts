import { compareVersion } from "./solution";

describe("165. Compare Version Numbers", () => {
  it('compareVersion should return 0 for version1 = "1.01", version2 = "1.001"', () => {
    const version1 = "1.01";
    const version2 = "1.001";
    const result = compareVersion(version1, version2);
    expect(result).toEqual(0);
  });

  it('compareVersion should return 0 for version1 = "1.0", version2 = "1.0.0"', () => {
    const version1 = "1.0";
    const version2 = "1.0.0";
    const result = compareVersion(version1, version2);
    expect(result).toEqual(0);
  });

  it('compareVersion should return -1 for version1 = "0.1", version2 = "1.1"', () => {
    const version1 = "0.1";
    const version2 = "1.1";
    const result = compareVersion(version1, version2);
    expect(result).toEqual(-1);
  });

  it('compareVersion should return -1 for version1 = "1", version2 = "1.1"', () => {
    const version1 = "1";
    const version2 = "1.1";
    const result = compareVersion(version1, version2);
    expect(result).toEqual(-1);
  });
});
