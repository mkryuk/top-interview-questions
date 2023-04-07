import { minDistance } from "./solution";

describe("Allocate Mailboxes", () => {
  it("minDistance should return 5 for houses = [1,4,8,10,20], k = 3", () => {
    const houses = [1, 4, 8, 10, 20];
    const k = 3;
    const result = minDistance(houses, k);
    expect(result).toEqual(5);
  });

  it("minDistance should return 9 for houses = [2,3,5,12,18], k = 2", () => {
    const houses = [2, 3, 5, 12, 18];
    const k = 2;
    const result = minDistance(houses, k);
    expect(result).toEqual(9);
  });
});
