import { deleteDuplicateFolder } from "./solution";

describe("1948. Delete Duplicate Folders in System", () => {
  it('deleteDuplicateFolder should return [["d"],["d","a"]] for paths = [["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]]', () => {
    const paths = [["a"], ["c"], ["d"], ["a", "b"], ["c", "b"], ["d", "a"]];
    const result = deleteDuplicateFolder(paths);
    expect(result).toEqual([["d"], ["d", "a"]]);
  });

  it('deleteDuplicateFolder should return [["c"],["c","b"],["a"],["a","b"]] for paths = [["a"],["c"],["a","b"],["c","b"],["a","b","x"],["a","b","x","y"],["w"],["w","y"]]', () => {
    const paths = [["a"], ["c"], ["a", "b"], ["c", "b"], ["a", "b", "x"], ["a", "b", "x", "y"], ["w"], ["w", "y"]];
    const result = deleteDuplicateFolder(paths);
    expect(result).toEqual([["a"], ["a", "b"], ["c"], ["c", "b"]]);
  });

  it('deleteDuplicateFolder should return [["c"],["c","d"],["a"],["a","b"]] for paths = [["a","b"],["c","d"],["c"],["a"]]', () => {
    const paths = [["a", "b"], ["c", "d"], ["c"], ["a"]];
    const result = deleteDuplicateFolder(paths);
    expect(result).toEqual([["a"], ["a", "b"], ["c"], ["c", "d"]]);
  });
});
