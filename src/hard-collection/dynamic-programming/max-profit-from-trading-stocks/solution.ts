export function maxProfit(
  n: number,
  present: number[],
  future: number[],
  hierarchy: number[][],
  budget: number,
): number {
  // build children lists (boss -> direct report)
  const children: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of hierarchy) {
    children[u].push(v);
  }

  // 1-index prices
  const pres: number[] = new Array(n + 1).fill(0);
  const fut: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    pres[i] = present[i - 1];
    fut[i] = future[i - 1];
  }

  const [dp0Root] = dfs(1, children, pres, fut, budget);

  // pick best profit with cost <= budget
  let result = 0;
  for (let b = 0; b <= budget; b++) {
    if (dp0Root[b] > result) {
      result = dp0Root[b];
    }
  }

  return result;
}

const NEG = -1e15;

function mergeKnapsack(a: number[], b: number[], budget: number): number[] {
  const res: number[] = new Array(budget + 1).fill(NEG);

  for (let i = 0; i <= budget; i++) {
    if (a[i] <= NEG / 2) {
      continue;
    }
    for (let j = 0; i + j <= budget; j++) {
      if (b[j] <= NEG / 2) {
        continue;
      }
      const cand = a[i] + b[j];
      if (cand > res[i + j]) {
        res[i + j] = cand;
      }
    }
  }

  return res;
}

function buildDpForParentState(
  u: number,
  parentBought: 0 | 1,
  pres: number[],
  fut: number[],
  mergedChildrenIfUNotBought: number[],
  mergedChildrenIfUBought: number[],
  budget: number,
): number[] {
  // option a: don't buy u
  const optionA: number[] = mergedChildrenIfUNotBought.slice();

  // option b: buy u
  const cost = parentBought === 1 ? Math.floor(pres[u] / 2) : pres[u];
  const profitFromU = fut[u] - cost;

  const optionB: number[] = new Array(budget + 1).fill(NEG);
  for (let b = cost; b <= budget; b++) {
    const prev = mergedChildrenIfUBought[b - cost];
    if (prev <= NEG / 2) {
      continue;
    }
    optionB[b] = prev + profitFromU;
  }

  const best: number[] = new Array(budget + 1).fill(NEG);
  for (let b = 0; b <= budget; b++) {
    best[b] = optionA[b] > optionB[b] ? optionA[b] : optionB[b];
  }

  return best;
}

function dfs(u: number, children: number[][], pres: number[], fut: number[], budget: number): [number[], number[]] {
  // merged results of children depending on whether u is bought or not
  let mergedChildrenIfUNotBought: number[] = new Array(budget + 1).fill(NEG);
  let mergedChildrenIfUBought: number[] = new Array(budget + 1).fill(NEG);

  mergedChildrenIfUNotBought[0] = 0;
  mergedChildrenIfUBought[0] = 0;

  for (const v of children[u]) {
    const [dp0v, dp1v] = dfs(v, children, pres, fut, budget);

    // if u not bought -> child sees parentBought=0
    mergedChildrenIfUNotBought = mergeKnapsack(mergedChildrenIfUNotBought, dp0v, budget);

    // if u bought -> child sees parentBought=1
    mergedChildrenIfUBought = mergeKnapsack(mergedChildrenIfUBought, dp1v, budget);
  }

  const dp0u = buildDpForParentState(u, 0, pres, fut, mergedChildrenIfUNotBought, mergedChildrenIfUBought, budget);

  const dp1u = buildDpForParentState(u, 1, pres, fut, mergedChildrenIfUNotBought, mergedChildrenIfUBought, budget);

  return [dp0u, dp1u];
}
