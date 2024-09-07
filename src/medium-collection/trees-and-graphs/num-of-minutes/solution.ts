export function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  const subordinatesMap = new Map<number, number[]>();
  for (let i = 0; i < manager.length; i++) {
    const managerId = manager[i];
    if (!subordinatesMap.has(managerId)) {
      subordinatesMap.set(managerId, []);
    }
    subordinatesMap.get(managerId)!.push(i);
  }
  return dfs(headID, subordinatesMap, informTime);
}

function dfs(manager: number, subordinatesMap: Map<number, number[]>, informTime: number[]): number {
  if (!subordinatesMap.has(manager)) {
    return 0;
  }
  let subordinates = subordinatesMap.get(manager)!;
  let time = 0;
  for (let i = 0; i < subordinates.length; i++) {
    time = Math.max(time, dfs(subordinates[i], subordinatesMap, informTime));
  }
  return informTime[manager] + time;
}
