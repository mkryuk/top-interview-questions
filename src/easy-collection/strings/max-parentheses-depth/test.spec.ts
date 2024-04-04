import { maxDepth } from "./solution";

describe("Maximum Nesting Depth of the Parentheses", () => {
  it('maxDepth should return 3 for s = "(1+(2*3)+((8)/4))+1"', () => {
    const s = "(1+(2*3)+((8)/4))+1";
    const result = maxDepth(s);
    expect(result).toEqual(3);
  });

  it('maxDepth should return 3 for s = "(1)+((2))+(((3)))"', () => {
    const s = "(1)+((2))+(((3)))";
    const result = maxDepth(s);
    expect(result).toEqual(3);
  });
});
