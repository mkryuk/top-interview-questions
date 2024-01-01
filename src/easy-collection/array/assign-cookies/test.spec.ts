import { findContentChildren } from "./solution";

describe("Assign Cookies:", () => {
  it("findContentChildren should return 1 for g = [1,2,3], s = [1,1]", () => {
    const g = [1, 2, 3];
    const s = [1, 1];
    const result = findContentChildren(g, s);
    expect(result).toEqual(1);
  });

  it("findContentChildren should return 2 for g = [1,2], s = [1,2,3]", () => {
    const g = [1, 2];
    const s = [1, 2, 3];
    const result = findContentChildren(g, s);
    expect(result).toEqual(2);
  });
});
