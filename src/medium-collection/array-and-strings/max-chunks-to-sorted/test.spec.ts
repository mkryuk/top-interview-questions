import { maxChunksToSorted } from "./solution";

describe("Max Chunks To Make Sorted", () => {
  it("maxChunksToSorted should return 1 for arr = [4,3,2,1,0];", () => {
    const arr = [4, 3, 2, 1, 0];
    const result = maxChunksToSorted(arr);
    expect(result).toBe(1);
  });

  it("maxChunksToSorted should return 4 for arr = [1,0,2,3,4];", () => {
    const arr = [1, 0, 2, 3, 4];
    const result = maxChunksToSorted(arr);
    expect(result).toBe(4);
  });
});
