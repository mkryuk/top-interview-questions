import { constructDistancedSequence } from "./solution";

describe("Construct the Lexicographically Largest Valid Sequence", () => {
  it("constructDistancedSequence should return [3,1,2,3,2] for n = 3", () => {
    const n = 3;
    const result = constructDistancedSequence(n);
    expect(result).toEqual([3, 1, 2, 3, 2]);
  });

  it("constructDistancedSequence should return [5,3,1,4,3,5,2,4,2] for n = 5", () => {
    const n = 5;
    const result = constructDistancedSequence(n);
    expect(result).toEqual([5, 3, 1, 4, 3, 5, 2, 4, 2]);
  });
});
