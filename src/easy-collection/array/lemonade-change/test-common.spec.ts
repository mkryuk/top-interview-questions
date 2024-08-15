import { lemonadeChange } from "./solution-common";

describe("Lemonade Change", () => {
  it("lemonadeChange should return true for bills = [5,5,5,10,20]", () => {
    const bills = [5, 5, 5, 10, 20];
    const result = lemonadeChange(bills);
    expect(result).toBeTrue();
  });

  it("lemonadeChange should return false for bills = [5,5,10,10,20]", () => {
    const bills = [5, 5, 10, 10, 20];
    const result = lemonadeChange(bills);
    expect(result).toBeFalse();
  });
});
