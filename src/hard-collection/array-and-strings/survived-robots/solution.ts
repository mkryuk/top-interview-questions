export function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string,
): number[] {
  // Create a list of robots with their properties
  const robots = positions.map((position, index) => ({
    position,
    health: healths[index],
    direction: directions[index],
    index,
  }));
  robots.sort((a, b) => a.position - b.position);
  const stack: {
    position: number;
    health: number;
    direction: string;
    index: number;
  }[] = [];

  for (const robot of robots) {
    if (robot.direction === "R") {
      // robots moving to the right are simply added to the stack
      stack.push(robot);
    } else {
      // robots moving to the left may collide with robots in the stack
      while (stack.length > 0 && stack[stack.length - 1].direction === "R") {
        const top = stack[stack.length - 1];
        if (top.health > robot.health) {
          // top robot survives with reduced health
          top.health -= 1;
          robot.health = 0;
          break;
        } else if (top.health < robot.health) {
          // current robot survives with reduced health
          stack.pop();
          robot.health -= 1;
        } else {
          // both robots are destroyed
          stack.pop();
          robot.health = 0;
          break;
        }
      }
      // if the robot survives, add it to the stack
      if (robot.health > 0) {
        stack.push(robot);
      }
    }
  }

  const survivingHealths: number[] = new Array(positions.length).fill(0);
  for (const robot of stack) {
    survivingHealths[robot.index] = robot.health;
  }

  return survivingHealths.filter((health) => health > 0);
}
