import { isValid } from "./solution";

describe("3136. Valid Word", () => {
  it('isValid should return true for word = "234Adas"', () => {
    const word = "234Adas";
    const result = isValid(word);
    expect(result).toBeTrue();
  });

  it('isValid should return false for  word = "b3"', () => {
    const word = "b3";
    const result = isValid(word);
    expect(result).toBeFalse();
  });

  it('isValid should return false for  word = "a3$e"', () => {
    const word = "a3$e";
    const result = isValid(word);
    expect(result).toBeFalse();
  });
});
