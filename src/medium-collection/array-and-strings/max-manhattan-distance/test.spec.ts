import { maxDistance } from "./solution";

describe("3443. Maximum Manhattan Distance After K Changes", () => {
  it('maxDistance should return 3 for s = "NWSE", k = 1', () => {
    const s = "NWSE";
    const k = 1;
    const result = maxDistance(s, k);
    expect(result).toEqual(3);
  });

  it('maxDistance should return 6 for s = "NSWWEW", k = 3', () => {
    const s = "NSWWEW";
    const k = 3;
    const result = maxDistance(s, k);
    expect(result).toEqual(6);
  });
});
