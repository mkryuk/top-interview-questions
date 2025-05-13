import { lengthAfterTransformations } from "./solution";

describe("Total Characters in String After Transformations I", () => {
  it('lengthAfterTransformations should return 7 for s = "abcyy", t = 2', () => {
    const s = "abcyy";
    const t = 2;
    const result = lengthAfterTransformations(s, t);
    expect(result).toEqual(7);
  });

  it('lengthAfterTransformations should return 5 for s = "azbk", t = 1', () => {
    const s = "azbk";
    const t = 1;
    const result = lengthAfterTransformations(s, t);
    expect(result).toEqual(5);
  });
});
