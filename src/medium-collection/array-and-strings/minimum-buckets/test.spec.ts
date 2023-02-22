import { minimumBuckets } from "./solution";

describe("Minimum Number of Food Buckets to Feed the Hamsters", () => {
  it('minimumBuckets should return 2 for hamsters = "H..H"', () => {
    const hamsters = "H..H";
    const result = minimumBuckets(hamsters);
    expect(result).toEqual(2);
  });

  it('minimumBuckets should return 1 for hamsters = ".H.H."', () => {
    const hamsters = ".H.H.";
    const result = minimumBuckets(hamsters);
    expect(result).toEqual(1);
  });

  it('minimumBuckets should return -1 for hamsters = ".HHH."', () => {
    const hamsters = ".HHH.";
    const result = minimumBuckets(hamsters);
    expect(result).toEqual(-1);
  });
});
