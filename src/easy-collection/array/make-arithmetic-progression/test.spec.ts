import { canMakeArithmeticProgression } from "./solution";

describe("Can Make Arithmetic Progression From Sequence:", () => {
  it("canMakeArithmeticProgression should return true for arr = [3,5,1]", () => {
    const arr = [3, 5, 1];
    expect(canMakeArithmeticProgression(arr)).toBeTrue();
  });

  it("canMakeArithmeticProgression should return false for arr = [1,2,4]", () => {
    const arr = [1, 2, 4];
    expect(canMakeArithmeticProgression(arr)).toBeFalse();
  });
});
