import { minDays } from "./solution";

describe("Minimum Number of Days to Make m Bouquets", () => {
  it("minDays should return 3 for bloomDay = [1,10,3,10,2], m = 3, k = 1", () => {
    const bloomDay = [1, 10, 3, 10, 2];
    const m = 3;
    const k = 1;
    const result = minDays(bloomDay, m, k);
    expect(result).toEqual(3);
  });

  it("minDays should return -1 for bloomDay = [1,10,3,10,2], m = 3, k = 2", () => {
    const bloomDay = [1, 10, 3, 10, 2];
    const m = 3;
    const k = 2;
    const result = minDays(bloomDay, m, k);
    expect(result).toEqual(-1);
  });

  it("minDays should return 12 for bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3", () => {
    const bloomDay = [7, 7, 7, 7, 12, 7, 7];
    const m = 2;
    const k = 3;
    const result = minDays(bloomDay, m, k);
    expect(result).toEqual(12);
  });
});
