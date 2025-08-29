import { flowerGame } from "./solution";

describe("3021. Alice and Bob Playing Flower Game", () => {
  it("flowerGame should return 3 for n = 3, m = 2", () => {
    const n = 3;
    const m = 2;
    const result = flowerGame(n, m);
    expect(result).toEqual(3);
  });

  it("flowerGame should return 0 for n = 1, m = 1", () => {
    const n = 1;
    const m = 1;
    const result = flowerGame(n, m);
    expect(result).toEqual(0);
  });
});
