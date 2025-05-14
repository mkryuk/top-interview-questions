import { lengthAfterTransformations } from "./solution";

describe("Total Characters in String After Transformations II", () => {
  it('lengthAfterTransformations should return 7 for s = "abcyy", t = 2, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]', () => {
    const s = "abcyy";
    const t = 2;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
    const result = lengthAfterTransformations(s, t, nums);
    expect(result).toEqual(7);
  });

  it('lengthAfterTransformations should return 8 for s = "azbk", t = 1, nums = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]', () => {
    const s = "azbk";
    const t = 1;
    const nums = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const result = lengthAfterTransformations(s, t, nums);
    expect(result).toEqual(8);
  });
});
