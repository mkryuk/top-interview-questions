import { sumGame } from "./solution";

describe("1927. Sum Game:", () => {
  it('sumGame should return false for num = "5023"', () => {
    const num = "5023";
    const result = sumGame(num);
    expect(result).toEqual(false);
  });

  it('sumGame should return true for num = "25??"', () => {
    const num = "25??";
    const result = sumGame(num);
    expect(result).toEqual(true);
  });

  it('sumGame should return false for num = "?3295???"', () => {
    const num = "?3295???";
    const result = sumGame(num);
    expect(result).toEqual(false);
  });
});
