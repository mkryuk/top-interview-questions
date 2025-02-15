import { punishmentNumber } from "./solution";

describe("Find the Punishment Number of an Integer", () => {
  it("punishmentNumber should return 182 for n = 10", () => {
    const n = 10;
    const result = punishmentNumber(n);
    expect(result).toEqual(182);
  });

  it("punishmentNumber should return 1478 for n = 37", () => {
    const n = 37;
    const result = punishmentNumber(n);
    expect(result).toEqual(1478);
  });
});
