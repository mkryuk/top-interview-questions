import { isOneBitCharacter } from "./solution";

describe("717. 1-bit and 2-bit Characters", () => {
  it("isOneBitCharacter should return true for bits = [1,0,0]", () => {
    const bits = [1, 0, 0];
    const result = isOneBitCharacter(bits);
    expect(result).toBeTrue();
  });

  it("isOneBitCharacter should return false for bits = [1,1,1,0]", () => {
    const bits = [1, 1, 1, 0];
    const result = isOneBitCharacter(bits);
    expect(result).toBeFalse();
  });
});
