import { putMarbles } from "./solution";

describe("Put Marbles in Bags", () => {
  it("putMarbles should return 4 for weights = [1,3,5,1], k = 2", () => {
    const weights = [1, 3, 5, 1];
    const k = 2;
    const result = putMarbles(weights, k);
    expect(result).toEqual(4);
  });

  it("putMarbles should return 0 for weights = [1, 3], k = 2", () => {
    const weights = [1, 3];
    const k = 2;
    const result = putMarbles(weights, k);
    expect(result).toEqual(0);
  });
});
