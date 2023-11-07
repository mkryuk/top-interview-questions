import { eliminateMaximum } from "./solution";

describe("Eliminate Maximum Number of Monsters:", () => {
  it("eliminateMaximum should return 3 for dist = [1,3,4], speed = [1,1,1]", () => {
    const dist = [1, 3, 4];
    const speed = [1, 1, 1];
    const result = eliminateMaximum(dist, speed);
    expect(result).toEqual(3);
  });

  it("eliminateMaximum should return 1 for dist = [1,1,2,3], speed = [1,1,1,1]", () => {
    const dist = [1, 1, 2, 3];
    const speed = [1, 1, 1, 1];
    const result = eliminateMaximum(dist, speed);
    expect(result).toEqual(1);
  });

  it("eliminateMaximum should return 1 for dist = [3,2,4], speed = [5,3,2]", () => {
    const dist = [3, 2, 4];
    const speed = [5, 3, 2];
    const result = eliminateMaximum(dist, speed);
    expect(result).toEqual(1);
  });
});
