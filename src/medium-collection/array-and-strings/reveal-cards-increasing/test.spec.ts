import { deckRevealedIncreasing } from "./solution";

describe("Reveal Cards In Increasing Order", () => {
  it("deckRevealedIncreasing should return [2,13,3,11,5,17,7] for deck = [17,13,11,2,3,5,7]", () => {
    const deck = [17, 13, 11, 2, 3, 5, 7];
    const result = deckRevealedIncreasing(deck);
    expect(result).toEqual([2, 13, 3, 11, 5, 17, 7]);
  });

  it("deckRevealedIncreasing should return [1,1000] for deck = [1,1000]", () => {
    const deck = [1, 1000];
    const result = deckRevealedIncreasing(deck);
    expect(result).toEqual([1, 1000]);
  });
});
