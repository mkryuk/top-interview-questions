import { knightDialer } from "./solution";

describe("Knight Dialer", () => {
  it("knightDialer should return 10 for n = 1", () => {
    const n = 1;
    const result = knightDialer(n);
    expect(result).toEqual(10);
  });

  it("knightDialer should return 20 for n = 2", () => {
    const n = 2;
    const result = knightDialer(n);
    expect(result).toEqual(20);
  });

  it("knightDialer should return 136006598 for n = 3131", () => {
    const n = 3131;
    const result = knightDialer(n);
    expect(result).toEqual(136006598);
  });
});
