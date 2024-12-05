import { canChange } from "./solution";

describe("Move Pieces to Obtain a String", () => {
  it('canChange should return true for start = "_L__R__R_", target = "L______RR"', () => {
    const start = "_L__R__R_";
    const target = "L______RR";
    const result = canChange(start, target);
    expect(result).toBeTrue();
  });

  it('canChange should return false for start = "R_L_", target = "__LR"', () => {
    const start = "R_L_";
    const target = "__LR";
    const result = canChange(start, target);
    expect(result).toBeFalse();
  });

  it('canChange should return false for start = "_R", target = "R_"', () => {
    const start = "_R";
    const target = "R_";
    const result = canChange(start, target);
    expect(result).toBeFalse();
  });
});
