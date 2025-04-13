import { countGoodNumbers } from "./solution";

describe("Count Good Numbers", () => {
  it("countGoodNumbers should return 5 for n = 1", () => {
    const n = 1;
    const result = countGoodNumbers(n);
    expect(result).toEqual(5);
  });

  it("countGoodNumbers should return 400 for n = 4", () => {
    const n = 4;
    const result = countGoodNumbers(n);
    expect(result).toEqual(400);
  });

  it("countGoodNumbers should return 564908303 for n = 50", () => {
    const n = 50;
    const result = countGoodNumbers(n);
    expect(result).toEqual(564908303);
  });
});
