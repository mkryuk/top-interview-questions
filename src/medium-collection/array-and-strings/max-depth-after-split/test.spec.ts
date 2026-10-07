import { maxDepthAfterSplit } from "./solution";

describe("1111. Maximum Nesting Depth of Two Valid Parentheses Strings:", () => {
  it('maxDepthAfterSplit should return [1,0,0,0,0,1] for seq = "(()())"', () => {
    const seq = "(()())";
    const result = maxDepthAfterSplit(seq);
    expect(result).toEqual([1, 0, 0, 0, 0, 1]);
  });

  it('maxDepthAfterSplit should return [1,1,1,0,0,1,1,1] for seq = "()(())()"', () => {
    const seq = "()(())()";
    const result = maxDepthAfterSplit(seq);
    expect(result).toEqual([1, 1, 1, 0, 0, 1, 1, 1]);
  });
});
