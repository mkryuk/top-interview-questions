export function canVisitAllRooms(rooms: number[][]): boolean {
  return dfs(0, rooms, new Set());
}

function dfs(room: number, rooms: number[][], visited: Set<number>): boolean {
  if (visited.has(room)) {
    return false;
  }
  visited.add(room);
  if (rooms.length === visited.size) {
    return true;
  }
  const keys = rooms[room];
  for (let i = 0; i < keys.length; i++) {
    if (dfs(keys[i], rooms, visited)) {
      return true;
    }
  }
  return false;
}
