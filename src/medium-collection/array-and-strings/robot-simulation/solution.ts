const Direction = {
  // North means +Y direction.
  North: [0, 1],
  // East means +X direction.
  East: [1, 0],
  // South means -Y direction.
  South: [0, -1],
  // West means -X direction.
  West: [-1, 0],
};

const turnLeft = -2;
const turnRight = -1;

export function robotSim(commands: number[], obstacles: number[][]): number {
  let coords = [0, 0];
  let obstaclesSet = new Set<string>();
  obstacles.forEach((obstacle) => obstaclesSet.add(obstacle.toString()));

  let direction = Direction.North;
  let result = 0;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === turnLeft || commands[i] === turnRight) {
      direction = getDirection(direction, commands[i]);
      continue;
    }
    coords = move(coords, direction, commands[i], obstaclesSet);
    const [x, y] = coords;
    result = Math.max(result, Math.pow(x, 2) + Math.pow(y, 2));
  }
  return result;
}

function getDirection(direction: number[], turn: number): number[] {
  switch (direction.toString()) {
    case Direction.North.toString():
      return turn === turnLeft ? Direction.West : Direction.East;
    case Direction.East.toString():
      return turn === turnLeft ? Direction.North : Direction.South;
    case Direction.South.toString():
      return turn === turnLeft ? Direction.East : Direction.West;
    case Direction.West.toString():
      return turn === turnLeft ? Direction.South : Direction.North;
    default:
      return [0, 0];
  }
}

function move(
  [x, y]: number[],
  [dx, dy]: number[],
  steps: number,
  obstacles: Set<string>,
): number[] {
  for (let i = 0; i < steps; i++) {
    const temp = [x + dx, y + dy];
    if (obstacles.has(temp.toString())) {
      break;
    }
    [x, y] = temp;
  }
  return [x, y];
}
