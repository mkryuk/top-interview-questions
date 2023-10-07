import { canTransform } from "./solution";

describe("Swap Adjacent in LR String:", () => {
  it('canTransform should return true for start = "RXXLRXRXL", end = "XRLXXRRLX"', () => {
    const start = "RXXLRXRXL";
    const end = "XRLXXRRLX";
    const result = canTransform(start, end);
    expect(result).toBeTrue();
  });

  it('canTransform should return false for start = "X", end = "L"', () => {
    const start = "X";
    const end = "L";
    const result = canTransform(start, end);
    expect(result).toBeFalse();
  });
});
