import { Robot } from "./robot";

it("robot should not go over right bound", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  let moveResult = robot.move();
  expect(moveResult).toBeTrue();
  moveResult = robot.move();
  expect(moveResult).toBeFalse();
  robot.clean();
  expect(room).toEqual([
    [1, 2],
    [1, 1],
  ]);
});

it("robot should not go over down bound", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.turnRight();
  let moveResult = robot.move();
  expect(moveResult).toBeTrue();
  moveResult = robot.move();
  expect(moveResult).toBeFalse();
  robot.clean();
  expect(room).toEqual([
    [1, 1],
    [2, 1],
  ]);
});

it("robot should not go over left bound", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.turnRight();
  robot.turnRight();
  let moveResult = robot.move();
  expect(moveResult).toBeFalse();
  robot.clean();
  expect(room).toEqual([
    [2, 1],
    [1, 1],
  ]);
});

it("robot should not go over up bound", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.turnLeft();
  let moveResult = robot.move();
  expect(moveResult).toBeFalse();
  robot.clean();
  expect(room).toEqual([
    [2, 1],
    [1, 1],
  ]);
});

it("robot should clean starting point", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.clean();
  expect(room).toEqual([
    [2, 1],
    [1, 1],
  ]);
});

it("robot should go right and clean", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.move();
  robot.clean();
  expect(room).toEqual([
    [1, 2],
    [1, 1],
  ]);
});

it("robot should go down and clean", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.turnRight();
  robot.move();
  robot.clean();
  expect(room).toEqual([
    [1, 1],
    [2, 1],
  ]);
});

it("robot should clean all except starting point turning right", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.move();
  robot.clean();
  robot.turnRight();
  robot.move();
  robot.clean();
  robot.turnRight();
  robot.move();
  robot.clean();
  expect(room).toEqual([
    [1, 2],
    [2, 2],
  ]);
});

it("robot should clean all except starting point turning left", () => {
  const room = [
    [1, 1],
    [1, 1],
  ];
  const robot = new Robot(room, 0, 0);
  robot.turnLeft();
  robot.turnLeft();
  robot.turnLeft();
  robot.move();
  robot.clean();
  robot.turnLeft();
  robot.move();
  robot.clean();
  robot.turnLeft();
  robot.move();
  robot.clean();
  expect(room).toEqual([
    [1, 2],
    [2, 2],
  ]);
});
