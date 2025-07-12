import { earliestAndLatest } from "./solution";

describe("1900. The Earliest and Latest Rounds Where Players Compete", () => {
  it("earliestAndLatest should return [3,4] for n = 11, firstPlayer = 2, secondPlayer = 4", () => {
    const n = 11;
    const firstPlayer = 2;
    const secondPlayer = 4;
    const result = earliestAndLatest(n, firstPlayer, secondPlayer);
    expect(result).toEqual([3, 4]);
  });

  it("earliestAndLatest should return [1,1] for n = 5, firstPlayer = 1, secondPlayer = 5", () => {
    const n = 5;
    const firstPlayer = 1;
    const secondPlayer = 5;
    const result = earliestAndLatest(n, firstPlayer, secondPlayer);
    expect(result).toEqual([1, 1]);
  });
});
