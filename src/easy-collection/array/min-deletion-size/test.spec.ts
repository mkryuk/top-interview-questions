import { minDeletionSize } from "./solution";

describe("944. Delete Columns to Make Sorted", () => {
  it('minDeletionSize should return 1 for strs = ["cba","daf","ghi"]', () => {
    const strs = ["cba", "daf", "ghi"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(1);
  });

  it('minDeletionSize should return 0 for strs = ["a","b"]', () => {
    const strs = ["a", "b"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(0);
  });

  it('minDeletionSize should return 3 for strs = ["zyx","wvu","tsr"]', () => {
    const strs = ["zyx", "wvu", "tsr"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(3);
  });
});
