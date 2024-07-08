import { findTheWinner } from "./solution";

describe("Find the Winner of the Circular Game", () => {
  it("findTheWinner should return 3 for n = 5, k = 2", () => {
    const n = 5;
    const k = 2;
    const result = findTheWinner(n, k);
    expect(result).toEqual(3);
  });

  it("findTheWinner should return 1 for n = 6, k = 5", () => {
    const n = 6;
    const k = 5;
    const result = findTheWinner(n, k);
    expect(result).toEqual(1);
  });
});
