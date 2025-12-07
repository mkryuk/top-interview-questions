import { countOdds } from "./solution";

describe("1523. Count Odd Numbers in an Interval Range", () => {
  it("countOdds should return 3 for low = 3, high = 7", () => {
    const low = 3;
    const high = 7;
    const result = countOdds(low, high);
    expect(result).toEqual(3);
  });

  it("countOdds should return 1 for low = 8, high = 10", () => {
    const low = 8;
    const high = 10;
    const result = countOdds(low, high);
    expect(result).toEqual(1);
  });
});
