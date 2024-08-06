import { minimumPushes } from "./solution";

describe("Minimum Number of Pushes to Type Word II", () => {
  it('minimumPushes should return 5 for word = "abcde"', () => {
    const word = "abcde";
    const result = minimumPushes(word);
    expect(result).toEqual(5);
  });

  it('minimumPushes should return 12 for word = "xyzxyzxyzxyz"', () => {
    const word = "xyzxyzxyzxyz";
    const result = minimumPushes(word);
    expect(result).toEqual(12);
  });

  it('minimumPushes should return 24 for word = "aabbccddeeffgghhiiiiii"', () => {
    const word = "aabbccddeeffgghhiiiiii";
    const result = minimumPushes(word);
    expect(result).toEqual(24);
  });
});
