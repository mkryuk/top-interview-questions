import { pickGifts } from "./solution";

describe("Take Gifts From the Richest Pile", () => {
  it("pickGifts should return 29 for gifts = [25,64,9,4,100], k = 4", () => {
    const gifts = [25, 64, 9, 4, 100];
    const k = 4;
    const result = pickGifts(gifts, k);
    expect(result).toEqual(29);
  });

  it("pickGifts should return 4 for gifts = [1,1,1,1], k = 4", () => {
    const gifts = [1, 1, 1, 1];
    const k = 4;
    const result = pickGifts(gifts, k);
    expect(result).toEqual(4);
  });
});
