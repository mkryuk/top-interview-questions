import { ambiguousCoordinates } from "./solution";

describe("Ambiguous Coordinates", () => {
  it('ambiguousCoordinates should return ["(1, 2.3)","(1, 23)","(1.2, 3)","(12, 3)"] for s = "(123)"', () => {
    const s = "(123)";
    const result = ambiguousCoordinates(s);
    expect(result).toEqual(["(1, 2.3)", "(1, 23)", "(1.2, 3)", "(12, 3)"]);
  });

  it('ambiguousCoordinates should return ["(0, 1.23)","(0, 12.3)","(0, 123)","(0.1, 2.3)","(0.1, 23)","(0.12, 3)"] for s = "(0123)"', () => {
    const s = "(0123)";
    const result = ambiguousCoordinates(s);
    expect(result).toEqual([
      "(0, 1.23)",
      "(0, 12.3)",
      "(0, 123)",
      "(0.1, 2.3)",
      "(0.1, 23)",
      "(0.12, 3)",
    ]);
  });

  it('ambiguousCoordinates should return ["(0, 0.011)","(0.001, 1)"] for s = "(00011)"', () => {
    const s = "(00011)";
    const result = ambiguousCoordinates(s);
    expect(result).toEqual(["(0, 0.011)", "(0.001, 1)"]);
  });
});
