export function remainingMethods(n: number, k: number, invocations: number[][]): number[] {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [caller, called] of invocations) {
    graph[caller].push(called);
  }

  const suspicious: boolean[] = new Array(n).fill(false);
  const stack: number[] = [k];

  suspicious[k] = true;

  // find all methods reachable from k
  while (stack.length > 0) {
    const method = stack.pop()!;

    for (const invokedMethod of graph[method]) {
      if (!suspicious[invokedMethod]) {
        suspicious[invokedMethod] = true;
        stack.push(invokedMethod);
      }
    }
  }

  // check whether an outside method invokes a suspicious method
  for (const [caller, called] of invocations) {
    if (!suspicious[caller] && suspicious[called]) {
      return Array.from({ length: n }, (_, i) => i);
    }
  }

  const result: number[] = [];
  for (let method = 0; method < n; method++) {
    if (!suspicious[method]) {
      result.push(method);
    }
  }

  return result;
}
