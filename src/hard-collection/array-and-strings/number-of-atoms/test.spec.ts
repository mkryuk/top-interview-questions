import { countOfAtoms } from "./solution";

describe("Number of Atoms", () => {
  it('countOfAtoms should return "H2O" formula = "H2O"', () => {
    const formula = "H2O";
    const result = countOfAtoms(formula);
    expect(result).toEqual("H2O");
  });

  it('countOfAtoms should return "H2MgO2" formula = "Mg(OH)2"', () => {
    const formula = "Mg(OH)2";
    const result = countOfAtoms(formula);
    expect(result).toEqual("H2MgO2");
  });

  it('countOfAtoms should return "K4N2O14S4" formula = "K4(ON(SO3)2)2"', () => {
    const formula = "K4(ON(SO3)2)2";
    const result = countOfAtoms(formula);
    expect(result).toEqual("K4N2O14S4");
  });
});
