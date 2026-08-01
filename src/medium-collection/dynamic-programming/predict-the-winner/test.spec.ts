import { predictTheWinner } from "./solution";

describe("486. Predict the Winner:", () => {
  it("predictTheWinner should return false for nums = [1,5,2]", () => {
    const nums = [1, 5, 2];
    const result = predictTheWinner(nums);
    expect(result).toBeFalse();
  });

  it("predictTheWinner should return true for nums = [1,5,233,7]", () => {
    const nums = [1, 5, 233, 7];
    const result = predictTheWinner(nums);
    expect(result).toBeTrue();
  });
});
