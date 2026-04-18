import { mirrorDistance } from "./solution";

describe("3783. Mirror Distance of an Integer:", () => {
  it("mirrorDistance should return 27 for n = 25", () => {
    const n = 25;
    const result = mirrorDistance(n);
    expect(result).toEqual(27);
  });

  it("mirrorDistance should return 9 for n = 10", () => {
    const n = 10;
    const result = mirrorDistance(n);
    expect(result).toEqual(9);
  });

  it("mirrorDistance should return 0 for n = 7", () => {
    const n = 7;
    const result = mirrorDistance(n);
    expect(result).toEqual(0);
  });
});
