import { maxSatisfied } from "./solution";

describe("Grumpy Bookstore Owner", () => {
  it("maxSatisfied should pass test 1", () => {
    const customers = [1, 0, 1, 2, 1, 1, 7, 5];
    const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
    const minutes = 3;
    const result = maxSatisfied(customers, grumpy, minutes);
    expect(result).toEqual(16);
  });

  it("maxSatisfied should pass test 2", () => {
    const customers = [1];
    const grumpy = [0];
    const minutes = 1;
    const result = maxSatisfied(customers, grumpy, minutes);
    expect(result).toEqual(1);
  });

  it("maxSatisfied should pass test 3", () => {
    const customers = [3, 8, 8, 7, 1];
    const grumpy = [1, 1, 1, 1, 1];
    const minutes = 3;
    const result = maxSatisfied(customers, grumpy, minutes);
    expect(result).toEqual(23);
  });
});
