import { createGrid } from "./solution";

describe("3963. Create Grid With Exactly One Path:", () => {
  it('returns ["..#","#.."] for m = 2, n = 3', () => {
    const m = 2;
    const n = 3;
    const result = createGrid(m, n);
    expect(result).toEqual(["..#", "#.."]);
  });

  it('returns ["..#","#..","##."] for m = 3, n = 3', () => {
    const m = 3;
    const n = 3;
    const result = createGrid(m, n);
    expect(result).toEqual(["..#", "#..", "##."]);
  });

  it('returns ["...."] for m = 1, n = 4', () => {
    const m = 1;
    const n = 4;
    const result = createGrid(m, n);
    expect(result).toEqual(["...."]);
  });
});
