export const knows = function (graph: number[][]) {
  return function (a: number, b: number): boolean {
    return !!graph[a][b];
  };
};

export const solution = function (knows: any) {
  return function (n: number): number {
    return 0;
  };
};
