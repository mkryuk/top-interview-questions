import { numberOfAlternatingGroups } from "./solution";

describe("Alternating Groups II", () => {
  it("numberOfAlternatingGroups should return 3 for colors = [0,1,0,1,0], k = 3", () => {
    const colors = [0, 1, 0, 1, 0];
    const k = 3;
    const result = numberOfAlternatingGroups(colors, k);
    expect(result).toEqual(3);
  });

  it("numberOfAlternatingGroups should return 2 for colors = [0,1,0,0,1,0,1], k = 6", () => {
    const colors = [0, 1, 0, 0, 1, 0, 1];
    const k = 6;
    const result = numberOfAlternatingGroups(colors, k);
    expect(result).toEqual(2);
  });

  it("numberOfAlternatingGroups should return 0 for colors = [1,1,0,1], k = 4", () => {
    const colors = [1, 1, 0, 1];
    const k = 4;
    const result = numberOfAlternatingGroups(colors, k);
    expect(result).toEqual(0);
  });

  it("numberOfAlternatingGroups should return 4 for colors = [0,1,0,1], k = 3", () => {
    const colors = [0, 1, 0, 1];
    const k = 3;
    const result = numberOfAlternatingGroups(colors, k);
    expect(result).toEqual(4);
  });

  it("numberOfAlternatingGroups should return 1 for colors = [0,1,0,0], k = 3", () => {
    const colors = [0, 1, 0, 0];
    const k = 3;
    const result = numberOfAlternatingGroups(colors, k);
    expect(result).toEqual(1);
  });
});
