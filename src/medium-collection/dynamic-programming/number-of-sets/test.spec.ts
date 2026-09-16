import { numberOfSets } from "./solution";

describe("1621. Number of Sets of K Non-Overlapping Line Segments:", () => {
  it("numberOfSets should return 5 for n = 4, k = 2", () => {
    const n = 4;
    const k = 2;
    const result = numberOfSets(n, k);
    expect(result).toEqual(5);
  });

  it("numberOfSets should return 3 for n = 3, k = 1", () => {
    const n = 3;
    const k = 1;
    const result = numberOfSets(n, k);
    expect(result).toEqual(3);
  });

  it("numberOfSets should return 796297179 for n = 30, k = 7", () => {
    const n = 30;
    const k = 7;
    const result = numberOfSets(n, k);
    expect(result).toEqual(796297179);
  });
});
