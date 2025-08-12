import { numberOfWays } from "./solution";

describe("2787. Ways to Express an Integer as Sum of Powers", () => {
  it("numberOfWays should return 1 for n = 10, x = 2", () => {
    const n = 10;
    const x = 2;
    const result = numberOfWays(n, x);
    expect(result).toEqual(1);
  });

  it("numberOfWays should return 2 for n = 4, x = 1", () => {
    const n = 4;
    const x = 1;
    const result = numberOfWays(n, x);
    expect(result).toEqual(2);
  });
});
