import { maxDistance } from "./solution";

describe("Two Furthest Houses With Different Colors:", () => {
  it("maxDistance should return 3 for colors = [1,1,1,6,1,1,1]", () => {
    const colors = [1, 1, 1, 6, 1, 1, 1];
    const result = maxDistance(colors);
    expect(result).toEqual(3);
  });

  it("maxDistance should return 3 for colors = [1,8,3,8,3]", () => {
    const colors = [1, 8, 3, 8, 3];
    const result = maxDistance(colors);
    expect(result).toEqual(4);
  });

  it("maxDistance should return 3 for colors = [0,1]", () => {
    const colors = [0, 1];
    const result = maxDistance(colors);
    expect(result).toEqual(1);
  });

  it("maxDistance should return 8 for colors = [4,4,4,11,4,4,11,4,4,4,4,4]", () => {
    const colors = [4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4];
    const result = maxDistance(colors);
    expect(result).toEqual(8);
  });
});
