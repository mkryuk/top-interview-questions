export const knows = function (
  graph: number[][],
): (a: number, b: number) => boolean {
  return function (a: number, b: number): boolean {
    return !!graph[a][b];
  };
};

export const solution = function (knows: (a: number, b: number) => boolean) {
  return function (n: number): number {
    let ci = 0;
    for (let i = 1; i < n; i++) {
      if (knows(ci, i)) {
        ci = i;
      }
    }
    for (let i = 0; i < n; i++) {
      if (!knows(i, ci)) {
        return -1;
      }
    }
    for (let i = 0; i < n; i++) {
      if (ci === i) {
        continue;
      }
      if (knows(ci, i)) {
        return -1;
      }
    }
    return ci;
  };
};
