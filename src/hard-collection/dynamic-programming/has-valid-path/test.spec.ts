import { hasValidPath } from "./solution";

describe("2267. Check if There Is a Valid Parentheses String Path:", () => {
  it("hasValidPath should return true when a valid parentheses string path exists", () => {
    const grid = [
      ["(", "(", "("],
      [")", "(", ")"],
      ["(", "(", ")"],
      ["(", "(", ")"],
    ];
    const result = hasValidPath(grid);
    expect(result).toBe(true);
  });

  it("hasValidPath should return false when neither path forms a valid parentheses string", () => {
    const grid = [
      [")", ")"],
      ["(", "("],
    ];
    const result = hasValidPath(grid);
    expect(result).toBe(false);
  });
});
