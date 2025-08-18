import { judgePoint24 } from "./solution";

describe("679. 24 Game", () => {
  it("judgePoint24 should return true for cards = [4,1,8,7]", () => {
    const cards = [4, 1, 8, 7];
    const result = judgePoint24(cards);
    expect(result).toBeTrue();
  });

  it("judgePoint24 should return false for cards = [1,2,1,2]", () => {
    const cards = [1, 2, 1, 2];
    const result = judgePoint24(cards);
    expect(result).toBeFalse();
  });
});
