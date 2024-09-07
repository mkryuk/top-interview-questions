import { Robot } from "./robot";

// up, right, down, left
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export function cleanRoom(robot: Robot) {
  const visited = new Set<string>();
  dfs(robot, visited, 0, 0, 0);
}

function dfs(robot: Robot, visited: Set<string>, row: number, col: number, direction: number) {
  visited.add(`${row}_${col}`);
  robot.clean();
  for (let i = 0; i < 4; i++) {
    const newDirection = (direction + i) % 4;
    const [rShift, cShift] = directions[newDirection];
    const newRow = row + rShift;
    const newCol = col + cShift;
    if (!visited.has(`${newRow}_${newCol}`) && robot.move()) {
      dfs(robot, visited, newRow, newCol, newDirection);
      goBack(robot);
    }
    robot.turnRight();
  }
}

function goBack(robot: Robot): void {
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}
