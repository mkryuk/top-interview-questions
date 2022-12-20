export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Array(rooms.length).fill(false);
  visited[0] = true;
  const stack = [0];
  // start from room 0
  while (stack.length) {
    const room = stack.pop()!;
    const keys = rooms[room];
    keys.forEach((key) => {
      // mark all available rooms
      if (!visited[key]) {
        visited[key] = true;
        stack.push(key);
      }
    });
  }
  // check if there some not visited room left
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === false) {
      return false;
    }
  }
  return true;
}
