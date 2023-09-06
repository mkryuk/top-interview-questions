import { isNStraightHand } from "./solution";

describe("Hand of Straights:", () => {
  it("isPossibleDivide should return true for hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", () => {
    const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
    const groupSize = 3;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeTrue();
  });

  it("isPossibleDivide should return false for hand = [1,2,3,4,5], groupSize = 4", () => {
    const hand = [1, 2, 3, 4, 5];
    const groupSize = 4;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeFalse();
  });

  it("isPossibleDivide should return true for hand = [1,2,3,3,4,4,5,6], groupSize = 4", () => {
    const hand = [1, 2, 3, 3, 4, 4, 5, 6];
    const groupSize = 4;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeTrue();
  });

  it("isPossibleDivide should return true for hand = [3,2,1,2,3,4,3,4,5,9,10,11], groupSize= 3", () => {
    const hand = [3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11];
    const groupSize = 3;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeTrue();
  });

  it("isPossibleDivide should return false for hand = [1,2,3,4], groupSize= 3", () => {
    const hand = [1, 2, 3, 4];
    const groupSize = 3;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeFalse();
  });

  it("isPossibleDivide should return false for hand = [8,10,12], groupSize= 3", () => {
    const hand = [8, 10, 12];
    const groupSize = 3;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeFalse();
  });

  it("isPossibleDivide should return false for hand = [1,5], groupSize= 2", () => {
    const hand = [1, 5];
    const groupSize = 2;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeFalse();
  });

  it("isPossibleDivide should return false for hand = [1,1], groupSize= 2", () => {
    const hand = [1, 1];
    const groupSize = 2;
    const result = isNStraightHand(hand, groupSize);
    expect(result).toBeFalse();
  });
});
