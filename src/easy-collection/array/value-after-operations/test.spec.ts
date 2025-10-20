import { finalValueAfterOperations } from "./solution";

describe("2011. Final Value of Variable After Performing Operations", () => {
  it('finalValueAfterOperations should return 1 for operations = ["--X","X++","X++"]', () => {
    const operations = ["--X", "X++", "X++"];
    const result = finalValueAfterOperations(operations);
    expect(result).toEqual(1);
  });

  it('finalValueAfterOperations should return 3 for operations = ["++X","++X","X++"]', () => {
    const operations = ["++X", "++X", "X++"];
    const result = finalValueAfterOperations(operations);
    expect(result).toEqual(3);
  });

  it('finalValueAfterOperations should return 0 for operations = ["X++","++X","--X","X--"]', () => {
    const operations = ["X++", "++X", "--X", "X--"];
    const result = finalValueAfterOperations(operations);
    expect(result).toEqual(0);
  });
});
