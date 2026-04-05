import { judgeCircle } from "./solution";

describe("657. Robot Return to Origin:", () => {
  it('judgeCircle should return true for moves = "UD"', () => {
    const moves = "UD";
    const result = judgeCircle(moves);
    expect(result).toEqual(true);
  });

  it('judgeCircle should return false for moves = "LL"', () => {
    const moves = "LL";
    const result = judgeCircle(moves);
    expect(result).toEqual(false);
  });
});
