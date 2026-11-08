import { Heap } from "../../../hard-collection/design/heap/heap";

type FreeServer = {
  weight: number;
  index: number;
};

type BusyServer = {
  freeAt: number;
  weight: number;
  index: number;
};

export function assignTasks(servers: number[], tasks: number[]): number[] {
  const freeServers = new Heap<FreeServer>((left, right) => {
    if (left.weight !== right.weight) {
      return left.weight - right.weight;
    }
    return left.index - right.index;
  });

  const busyServers = new Heap<BusyServer>((left, right) => {
    if (left.freeAt !== right.freeAt) {
      return left.freeAt - right.freeAt;
    }

    if (left.weight !== right.weight) {
      return left.weight - right.weight;
    }

    return left.index - right.index;
  });

  for (let i = 0; i < servers.length; i++) {
    freeServers.push({
      weight: servers[i],
      index: i,
    });
  }

  const result: number[] = [];
  let time = 0;

  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex++) {
    time = Math.max(time, taskIndex);

    // release all servers available by the current time
    while (!busyServers.isEmpty() && busyServers.top()!.freeAt <= time) {
      const server = busyServers.pop()!;
      freeServers.push({
        weight: server.weight,
        index: server.index,
      });
    }

    // if no server is available, jump to the next release time
    if (freeServers.isEmpty()) {
      time = busyServers.top()!.freeAt;
      // release all servers that become available at this time
      while (!busyServers.isEmpty() && busyServers.top()!.freeAt <= time) {
        const server = busyServers.pop()!;
        freeServers.push({
          weight: server.weight,
          index: server.index,
        });
      }
    }

    const server = freeServers.pop()!;
    result.push(server.index);
    busyServers.push({
      freeAt: time + tasks[taskIndex],
      weight: server.weight,
      index: server.index,
    });
  }

  return result;
}
