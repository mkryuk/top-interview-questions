import { Robot } from "./solution";

describe("Walking Robot Simulation II:", () => {
  it("Robot should pass example 1", () => {
    const robot = new Robot(6, 3);

    robot.step(2);
    robot.step(2);
    expect(robot.getPos()).toEqual([4, 0]);
    expect(robot.getDir()).toBe("East");

    robot.step(2);
    robot.step(1);
    robot.step(4);
    expect(robot.getPos()).toEqual([1, 2]);
    expect(robot.getDir()).toBe("West");
  });
});
