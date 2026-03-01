import { minPartitions } from "./solution";

describe("1689. Partitioning Into Minimum Number Of Deci-Binary Numbers:", () => {
  it('minPartitions should return 3 for n = "32"', () => {
    const n = "32";
    const result = minPartitions(n);
    expect(result).toEqual(3);
  });

  it('minPartitions should return 8 for n = "82734"', () => {
    const n = "82734";
    const result = minPartitions(n);
    expect(result).toEqual(8);
  });

  it('minPartitions should return 9 for n = "27346209830709182346"', () => {
    const n = "27346209830709182346";
    const result = minPartitions(n);
    expect(result).toEqual(9);
  });
});
