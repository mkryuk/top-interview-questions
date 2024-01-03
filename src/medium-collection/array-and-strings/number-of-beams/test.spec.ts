import { numberOfBeams } from "./solution";

describe("Number of Laser Beams in a Bank:", () => {
  it('numberOfBeams should return 8 for bank = ["011001","000000","010100","001000"]', () => {
    const bank = ["011001", "000000", "010100", "001000"];
    const result = numberOfBeams(bank);
    expect(result).toEqual(8);
  });

  it('numberOfBeams should return 0 for bank = ["000","111","000"]', () => {
    const bank = ["000", "111", "000"];
    const result = numberOfBeams(bank);
    expect(result).toEqual(0);
  });
});
