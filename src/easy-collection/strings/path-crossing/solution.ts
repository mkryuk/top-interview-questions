export function isPathCrossing(path: string): boolean {
  let visited = new Set<string>();
  let point = {
    x: 0,
    y: 0,
    toString() {
      return `${this.x},${this.y}`;
    },
  };

  visited.add(point.toString());

  for (const direction of path) {
    switch (direction) {
      case "N":
        point.y++;
        break;
      case "E":
        point.x++;
        break;
      case "S":
        point.y--;
        break;
      case "W":
        point.x--;
        break;
    }
    if (visited.has(point.toString())) {
      return true;
    }
    visited.add(point.toString());
  }

  return false;
}
