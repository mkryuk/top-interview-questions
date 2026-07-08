import { sumAndMultiply } from "./solution";

describe("3756. Concatenate Non-Zero Digits and Multiply by Sum II:", () => {
  it('sumAndMultiply should return [12340, 4, 9] for s = "10203004", queries = [[0,7],[1,3],[4,6]]', () => {
    const s = "10203004";
    const queries = [
      [0, 7],
      [1, 3],
      [4, 6],
    ];
    const result = sumAndMultiply(s, queries);
    expect(result).toEqual([12340, 4, 9]);
  });

  it('sumAndMultiply should return [1, 0] for s = "1000", queries = [[0,3],[1,1]]', () => {
    const s = "1000";
    const queries = [
      [0, 3],
      [1, 1],
    ];
    const result = sumAndMultiply(s, queries);
    expect(result).toEqual([1, 0]);
  });

  it('sumAndMultiply should return [444444137] for s = "9876543210", queries = [[0,9]]', () => {
    const s = "9876543210";
    const queries = [[0, 9]];
    const result = sumAndMultiply(s, queries);
    expect(result).toEqual([444444137]);
  });
});
