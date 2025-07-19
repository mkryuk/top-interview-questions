import { removeSubfolders } from "./solution";

describe("1233. Remove Sub-Folders from the Filesystem", () => {
  it('removeSubfolders should return ["/a","/c/d","/c/f"] for folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]', () => {
    const folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
    const result = removeSubfolders(folder);
    expect(result).toEqual(["/a", "/c/d", "/c/f"]);
  });

  it('removeSubfolders should return ["/a"] for folder = ["/a","/a/b/c","/a/b/d"]', () => {
    const folder = ["/a", "/a/b/c", "/a/b/d"];
    const result = removeSubfolders(folder);
    expect(result).toEqual(["/a"]);
  });

  it('removeSubfolders should return ["/a/b/c","/a/b/ca","/a/b/d"] for folder = ["/a/b/c","/a/b/ca","/a/b/d"]', () => {
    const folder = ["/a/b/c", "/a/b/ca", "/a/b/d"];
    const result = removeSubfolders(folder);
    expect(result).toEqual(["/a/b/c", "/a/b/ca", "/a/b/d"]);
  });
});
