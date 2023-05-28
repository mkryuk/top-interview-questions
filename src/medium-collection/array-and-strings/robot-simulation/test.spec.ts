import { robotSim } from "./solution";

describe("Walking Robot Simulation:", () => {
  it("robotSim should return 25 for commands = [4,-1,3], obstacles = []", () => {
    const commands = [4, -1, 3];
    const obstacles: number[][] = [];
    const result = robotSim(commands, obstacles);
    expect(result).toEqual(25);
  });

  it("robotSim should return 65 for commands = [4,-1,4,-2,4], obstacles = [[2,4]]", () => {
    const commands = [4, -1, 4, -2, 4];
    const obstacles = [[2, 4]];
    const result = robotSim(commands, obstacles);
    expect(result).toEqual(25);
  });

  it("robotSim should return 36 for commands = [6,-1,-1,6], obstacles = []", () => {
    const commands = [6, -1, -1, 6];
    const obstacles: number[][] = [];
    const result = robotSim(commands, obstacles);
    expect(result).toEqual(25);
  });
});
