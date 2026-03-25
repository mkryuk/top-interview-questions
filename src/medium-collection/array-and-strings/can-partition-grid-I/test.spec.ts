import { canPartitionGrid } from "./solution";

describe("Equal Sum Grid Partition I", () => {
  it("canPartitionGrid should return true for grid = [[1,4],[2,3]]", () => {
    const grid = [
      [1, 4],
      [2, 3],
    ];
    const result = canPartitionGrid(grid);
    expect(result).toEqual(true);
  });

  it("canPartitionGrid should return false for grid = [[1,3],[2,4]]", () => {
    const grid = [
      [1, 3],
      [2, 4],
    ];
    const result = canPartitionGrid(grid);
    expect(result).toEqual(false);
  });
});
