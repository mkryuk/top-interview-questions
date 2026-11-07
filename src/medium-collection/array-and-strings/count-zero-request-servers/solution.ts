export function countServers(n: number, logs: number[][], x: number, queries: number[]): number[] {
  // sort logs by request time
  logs.sort((a, b) => a[1] - b[1]);

  // keep original query indexes because we will sort queries
  const sortedQueries = queries.map((time, index) => [time, index]).sort((a, b) => a[0] - b[0]);

  const result: number[] = new Array(queries.length);

  // request count for every server inside the current window
  const serverRequests: number[] = new Array(n + 1).fill(0);

  let activeServers = 0;
  let left = 0;
  let right = 0;

  for (const [queryTime, queryIndex] of sortedQueries) {
    const windowStart = queryTime - x;

    // add all logs with time <= queryTime
    while (right < logs.length && logs[right][1] <= queryTime) {
      const serverId = logs[right][0];

      if (serverRequests[serverId] === 0) {
        activeServers++;
      }

      serverRequests[serverId]++;
      right++;
    }

    // remove logs with time < queryTime - x
    while (left < right && logs[left][1] < windowStart) {
      const serverId = logs[left][0];

      serverRequests[serverId]--;

      if (serverRequests[serverId] === 0) {
        activeServers--;
      }

      left++;
    }

    result[queryIndex] = n - activeServers;
  }

  return result;
}
