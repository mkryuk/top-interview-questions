import { dividePlayers } from "./solution";

describe("Divide Players Into Teams of Equal Skill", () => {
  it("dividePlayers should return 22 for skill = [3,2,5,1,3,4]", () => {
    const skill = [3, 2, 5, 1, 3, 4];
    const result = dividePlayers(skill);
    expect(result).toEqual(22);
  });

  it("dividePlayers should return 12 for skill = [3,4]", () => {
    const skill = [3, 4];
    const result = dividePlayers(skill);
    expect(result).toEqual(12);
  });

  it("dividePlayers should return -1 for skill = [1,1,2,3]", () => {
    const skill = [1, 1, 2, 3];
    const result = dividePlayers(skill);
    expect(result).toEqual(-1);
  });
});
