import { decrypt } from "./solution";

describe("Defuse the Bomb", () => {
  it("decrypt should return [12,10,16,13] for code = [5,7,1,4], k = 3", () => {
    const code = [5, 7, 1, 4];
    const k = 3;
    const result = decrypt(code, k);
    expect(result).toEqual([12, 10, 16, 13]);
  });

  it("decrypt should return [0,0,0,0] for code = [1,2,3,4], k = 0", () => {
    const code = [1, 2, 3, 4];
    const k = 0;
    const result = decrypt(code, k);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("decrypt should return [12,5,6,13] for code = [2,4,9,3], k = -2", () => {
    const code = [2, 4, 9, 3];
    const k = -2;
    const result = decrypt(code, k);
    expect(result).toEqual([12, 5, 6, 13]);
  });
});
