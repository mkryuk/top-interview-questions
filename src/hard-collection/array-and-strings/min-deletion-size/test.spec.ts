import { minDeletionSize } from "./solution";

describe("960. Delete Columns to Make Sorted III", () => {
  it('minDeletionSize should return 3 for strs = ["babca","bbazb"]', () => {
    const strs = ["babca", "bbazb"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(3);
  });

  it('minDeletionSize should return 4 for strs = ["edcba"]', () => {
    const strs = ["edcba"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(4);
  });

  it('minDeletionSize should return 0 for strs = ["ghi","def","abc"]', () => {
    const strs = ["ghi", "def", "abc"];
    const result = minDeletionSize(strs);
    expect(result).toEqual(0);
  });
});
