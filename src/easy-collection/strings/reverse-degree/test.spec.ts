import { reverseDegree } from "./solution";

describe("3498. Reverse Degree of a String:", () => {
  it('reverseDegree should return 148 for s = "abc"', () => {
    const s = "abc";
    const result = reverseDegree(s);
    expect(result).toEqual(148);
  });

  it('reverseDegree should return 160 for s = "zaza"', () => {
    const s = "zaza";
    const result = reverseDegree(s);
    expect(result).toEqual(160);
  });
});
