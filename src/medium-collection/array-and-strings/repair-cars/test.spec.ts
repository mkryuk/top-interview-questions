import { repairCars } from "./solution";

describe("Minimum Time to Repair Cars", () => {
  it("repairCars should return 16 for ranks = [4,2,3,1], cars = 10", () => {
    const ranks = [4, 2, 3, 1];
    const cars = 10;
    const result = repairCars(ranks, cars);
    expect(result).toEqual(16);
  });

  it("repairCars should return 16 for ranks = [5,1,8], cars = 6", () => {
    const ranks = [5, 1, 8];
    const cars = 6;
    const result = repairCars(ranks, cars);
    expect(result).toEqual(16);
  });
});
