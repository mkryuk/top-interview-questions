import { findCheapestPrice } from "./solution";

describe("Cheapest Flights Within K Stops:", () => {
  it("findCheapestPrice should return 700 for test 1", () => {
    const n = 4;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ];
    const src = 0;
    const dst = 3;
    const k = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toEqual(700);
  });

  it("findCheapestPrice should return 200 for test 2", () => {
    const n = 3;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ];
    const src = 0;
    const dst = 2;
    const k = 1;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toEqual(200);
  });

  it("findCheapestPrice should return 500 for test 3", () => {
    const n = 3;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ];
    const src = 0;
    const dst = 2;
    const k = 0;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toEqual(500);
  });

  it("findCheapestPrice should return 400 for test 4", () => {
    const n = 4;
    const flights = [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ];
    const src = 0;
    const dst = 3;
    const k = 2;
    const result = findCheapestPrice(n, flights, src, dst, k);
    expect(result).toEqual(400);
  });
});
