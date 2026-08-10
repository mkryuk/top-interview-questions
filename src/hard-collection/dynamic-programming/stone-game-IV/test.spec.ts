import { winnerSquareGame } from "./solution";

describe("1510. Stone Game IV:", () => {
  it("winnerSquareGame should return true for n = 1", () => {
    const n = 1;
    const result = winnerSquareGame(n);
    expect(result).toEqual(true);
  });

  it("winnerSquareGame should return false for n = 2", () => {
    const n = 2;
    const result = winnerSquareGame(n);
    expect(result).toEqual(false);
  });

  it("winnerSquareGame should return true for n = 4", () => {
    const n = 4;
    const result = winnerSquareGame(n);
    expect(result).toEqual(true);
  });
});
