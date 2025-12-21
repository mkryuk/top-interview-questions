import { minDeletionSize } from "./solution";

describe("955. Delete Columns to Make Sorted II", () => {
  it('minDeletionSize should return 1 for strs = ["ca","bb","ac"]', () => {
    const strs = ["ca", "bb", "ac"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(1);
  });

  it('minDeletionSize should return 0 for strs = ["xc","yb","za"]', () => {
    const strs = ["xc", "yb", "za"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(0);
  });

  it('minDeletionSize should return 3 for strs = ["zyx","wvu","tsr"]', () => {
    const strs = ["zyx", "wvu", "tsr"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(3);
  });
});
