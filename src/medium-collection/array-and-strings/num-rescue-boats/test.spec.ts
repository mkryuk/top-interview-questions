import { numRescueBoats } from "./solution";

describe("Boats to Save People", () => {
  it("numRescueBoats should return 1 for people = [1,2], limit = 3", () => {
    const people = [1, 2];
    const limit = 3;
    const result = numRescueBoats(people, limit);
    expect(result).toEqual(1);
  });

  it("numRescueBoats should return 3 for people = [3,2,2,1], limit = 3", () => {
    const people = [3, 2, 2, 1];
    const limit = 3;
    const result = numRescueBoats(people, limit);
    expect(result).toEqual(3);
  });

  it("numRescueBoats should return 4 for people = [3,5,3,4], limit = 5", () => {
    const people = [3, 5, 3, 4];
    const limit = 5;
    const result = numRescueBoats(people, limit);
    expect(result).toEqual(4);
  });
});
