import { furthestDistanceFromOrigin } from "./solution";

describe("# 2833. Furthest Point From Origin:", () => {
  it('furthestDistanceFromOrigin should return 3 for moves = "L_RL__R"', () => {
    const moves = "L_RL__R";
    expect(furthestDistanceFromOrigin(moves)).toBe(3);
  });

  it('furthestDistanceFromOrigin should return 5 for moves = "_R__LL_"', () => {
    const moves = "_R__LL_";
    expect(furthestDistanceFromOrigin(moves)).toBe(5);
  });

  it('furthestDistanceFromOrigin should return 7 for moves = "_______"', () => {
    const moves = "_______";
    expect(furthestDistanceFromOrigin(moves)).toBe(7);
  });
});
