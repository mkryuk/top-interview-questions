import { findClosest } from "./solution";

describe("3516. Find Closest Person", () => {
  it("findClosest should return 1 for x = 2, y = 7, z = 4", () => {
    const x = 2;
    const y = 7;
    const z = 4;
    const result = findClosest(x, y, z);
    expect(result).toEqual(1);
  });

  it("findClosest should return 2 for x = 2, y = 5, z = 6", () => {
    const x = 2;
    const y = 5;
    const z = 6;
    const result = findClosest(x, y, z);
    expect(result).toEqual(2);
  });

  it("findClosest should return 0 for x = 1, y = 5, z = 3", () => {
    const x = 1;
    const y = 5;
    const z = 3;
    const result = findClosest(x, y, z);
    expect(result).toEqual(0);
  });
});
