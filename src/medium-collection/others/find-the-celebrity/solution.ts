export const knows = function (graph: number[][]): (a: number, b: number) => boolean {
  return function (a: number, b: number): boolean {
    return !!graph[a][b];
  };
};

export const solution = function (knows: (a: number, b: number) => boolean) {
  return function (n: number): number {
    let celebrity = 0;
    // find potential celebrity
    for (let i = 1; i < n; i++) {
      if (knows(celebrity, i)) {
        celebrity = i;
      }
    }
    // check if everyone knows the potential celebrity
    // and the potential celebrity knows no one
    for (let i = 0; i < n; i++) {
      if (celebrity === i) {
        continue;
      }
      if (!knows(i, celebrity) || knows(celebrity, i)) {
        return -1;
      }
    }
    return celebrity;
  };
};
