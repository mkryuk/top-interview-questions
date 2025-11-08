import { minimumOneBitOperations } from "./solution";

describe("1611. Minimum One Bit Operations to Make Integers Zero:", () => {
  it("minimumOneBitOperations should return 2 for n = 3", () => {
    const n = 3;
    const result = minimumOneBitOperations(n);
    expect(result).toEqual(2);
  });

  it("minimumOneBitOperations should return 4 for n = 6", () => {
    const n = 6;
    const result = minimumOneBitOperations(n);
    expect(result).toEqual(4);
  });

  it("minimumOneBitOperations should return 15 for n = 8", () => {
    const n = 8;
    const result = minimumOneBitOperations(n);
    expect(result).toEqual(15);
  });
});
