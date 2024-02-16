import { reformat } from "./solution";

describe("Reformat The String:", () => {
  it('reformat should return "0a1b2c" for s = "a0b1c2"', () => {
    const s = "a0b1c2";
    const result = reformat(s);
    let validPermutations = ["0a1b2c", "a0b1c2", "0a1b2c", "0c2a1b"];
    expect(validPermutations.some((p) => p === result)).toBeTrue();
  });

  it('reformat should return "" for s = "leetcode"', () => {
    const s = "leetcode";
    const result = reformat(s);
    expect(result).toEqual("");
  });

  it('reformat should return "0a1b2c" for s = "1229857369"', () => {
    const s = "1229857369";
    const result = reformat(s);
    expect(result).toEqual("");
  });
});
