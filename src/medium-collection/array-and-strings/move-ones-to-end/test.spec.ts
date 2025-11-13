import { maxOperations } from "./solution";

describe("3228. Maximum Number of Operations to Move Ones to the End", () => {
  it('maxOperations should return 4 for s = "1001101"', () => {
    const s = "1001101";
    const result = maxOperations(s);
    expect(result).toEqual(4);
  });

  it('maxOperations should return 0 for s = "00111"', () => {
    const s = "00111";
    const result = maxOperations(s);
    expect(result).toEqual(0);
  });
});
