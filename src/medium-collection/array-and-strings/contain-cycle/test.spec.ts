import { containsCycle } from "./solution";

describe("Detect Cycles in 2D Grid:", () => {
  it('containsCycle should return true for grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]', () => {
    const grid = [
      ["a", "a", "a", "a"],
      ["a", "b", "b", "a"],
      ["a", "b", "b", "a"],
      ["a", "a", "a", "a"],
    ];
    const result = containsCycle(grid);
    expect(result).toEqual(true);
  });

  it('containsCycle should return true for grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]', () => {
    const grid = [
      ["c", "c", "c", "a"],
      ["c", "d", "c", "c"],
      ["c", "c", "e", "c"],
      ["f", "c", "c", "c"],
    ];
    const result = containsCycle(grid);
    expect(result).toEqual(true);
  });

  it('containsCycle should return false for grid = [["a","b","b"],["b","z","b"],["b","b","a"]]', () => {
    const grid = [
      ["a", "b", "b"],
      ["b", "z", "b"],
      ["b", "b", "a"],
    ];
    const result = containsCycle(grid);
    expect(result).toEqual(false);
  });
});
