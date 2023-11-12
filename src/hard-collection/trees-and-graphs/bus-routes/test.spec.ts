import { numBusesToDestination } from "./solution";

describe("Bus Routes:", () => {
  it("numBusesToDestination should return 2 for routes = [[1,2,7],[3,6,7]], source = 1, target = 6", () => {
    const routes = [
      [1, 2, 7],
      [3, 6, 7],
    ];
    const source = 1;
    const target = 6;
    const result = numBusesToDestination(routes, source, target);
    expect(result).toEqual(2);
  });

  it("numBusesToDestination should return 2 for routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12", () => {
    const routes = [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]];
    const source = 15;
    const target = 12;
    const result = numBusesToDestination(routes, source, target);
    expect(result).toEqual(-1);
  });
});
