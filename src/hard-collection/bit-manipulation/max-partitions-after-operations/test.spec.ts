import { maxPartitionsAfterOperations } from "./solution";

describe("3003. Maximize the Number of Partitions After Operations", () => {
  it('maxPartitionsAfterOperations should return 3 for s = "accca", k = 2', () => {
    const s = "accca";
    const k = 2;
    const result = maxPartitionsAfterOperations(s, k);
    expect(result).toEqual(3);
  });

  it('maxPartitionsAfterOperations should return 1 for s = "aabaab", k = 3', () => {
    const s = "aabaab";
    const k = 3;
    const result = maxPartitionsAfterOperations(s, k);
    expect(result).toEqual(1);
  });

  it('maxPartitionsAfterOperations should return 4 for s = "xxyz", k = 1', () => {
    const s = "xxyz";
    const k = 1;
    const result = maxPartitionsAfterOperations(s, k);
    expect(result).toEqual(4);
  });
});
