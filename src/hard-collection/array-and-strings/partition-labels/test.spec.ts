import { partitionLabels } from "./solution";

describe("Partition Labels", () => {
  it('partitionLabels should return [9,7,8] for s = "ababcbacadefegdehijhklij"', () => {
    const s = "ababcbacadefegdehijhklij";
    const result = partitionLabels(s);
    expect(result).toEqual([9, 7, 8]);
  });

  it('partitionLabels should return [10] for s = "eccbbbbdec"', () => {
    const s = "eccbbbbdec";
    const result = partitionLabels(s);
    expect(result).toEqual([10]);
  });
});
