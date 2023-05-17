import { ambiguousCoordinates } from "./solution";

function compareArrays(left: string[], right: string[]): boolean {
  if (left.length !== right.length) {
    return false;
  }
  return left.every((l) => right.includes(l));
}

describe("Ambiguous Coordinates", () => {
  it('ambiguousCoordinates should return ["(1, 2.3)","(1, 23)","(1.2, 3)","(12, 3)"] for s = "(123)"', () => {
    const s = "(123)";
    const result = ambiguousCoordinates(s);
    const expected = ["(1, 2.3)", "(1, 23)", "(1.2, 3)", "(12, 3)"];
    expect(compareArrays(result, expected)).toBeTrue();
  });

  it('ambiguousCoordinates should return ["(0, 1.23)","(0, 12.3)","(0, 123)","(0.1, 2.3)","(0.1, 23)","(0.12, 3)"] for s = "(0123)"', () => {
    const s = "(0123)";
    const result = ambiguousCoordinates(s);
    const expected = [
      "(0, 1.23)",
      "(0, 12.3)",
      "(0, 123)",
      "(0.1, 2.3)",
      "(0.1, 23)",
      "(0.12, 3)",
    ];
    expect(compareArrays(result, expected)).toBeTrue();
  });

  it('ambiguousCoordinates should return ["(0, 0.011)","(0.001, 1)"] for s = "(00011)"', () => {
    const s = "(00011)";
    const result = ambiguousCoordinates(s);
    const expected = ["(0, 0.011)", "(0.001, 1)"];
    expect(compareArrays(result, expected)).toBeTrue();
  });
});
