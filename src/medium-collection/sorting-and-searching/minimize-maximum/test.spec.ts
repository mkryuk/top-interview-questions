import { minimizedMaximum } from "./solution";

describe("Minimized Maximum of Products Distributed to Any Store", () => {
  it("minimizedMaximum should return 3 for n = 6, quantities = [11,6]", () => {
    const n = 6;
    const quantities = [11, 6];
    const result = minimizedMaximum(n, quantities);
    expect(result).toEqual(3);
  });

  it("minimizedMaximum should return 5 for n = 7, quantities = [15,10,10]", () => {
    const n = 7;
    const quantities = [15, 10, 10];
    const result = minimizedMaximum(n, quantities);
    expect(result).toEqual(5);
  });

  it("minimizedMaximum should return 100000 for n = 1, quantities = [100000]", () => {
    const n = 1;
    const quantities = [100000];
    const result = minimizedMaximum(n, quantities);
    expect(result).toEqual(100000);
  });
});
