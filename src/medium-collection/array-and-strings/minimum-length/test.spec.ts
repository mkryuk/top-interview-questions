import { minimumLength } from "./solution";

describe("Minimum Length of String After Deleting Similar Ends:", () => {
  it('minimumLength should return 2 for s = "ca"', () => {
    const s = "ca";
    const result = minimumLength(s);
    expect(result).toEqual(2);
  });

  it('minimumLength should return 0 for s = "cabaabac"', () => {
    const s = "cabaabac";
    const result = minimumLength(s);
    expect(result).toEqual(0);
  });

  it('minimumLength should return 3 for s = "aabccabba"', () => {
    const s = "aabccabba";
    const result = minimumLength(s);
    expect(result).toEqual(3);
  });
});
