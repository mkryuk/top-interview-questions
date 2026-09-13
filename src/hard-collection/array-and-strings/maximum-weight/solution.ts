export function maximumWeight(intervals: number[][]): number[] {
  const sorted: Interval[] = intervals.map((interval, index) => ({
    left: interval[0],
    right: interval[1],
    weight: interval[2],
    index,
  }));

  sorted.sort((a, b) => {
    if (a.right !== b.right) {
      return a.right - b.right;
    }

    return a.left - b.left;
  });

  const n = sorted.length;
  const previous = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    previous[i] = findPrevious(sorted, i);
  }

  const dp: State[][] = Array.from({ length: n + 1 }, () =>
    Array.from({ length: 5 }, () => ({
      score: 0,
      indices: [],
    })),
  );

  for (let i = 1; i <= n; i++) {
    const current = sorted[i - 1];

    for (let count = 1; count <= 4; count++) {
      const skip = dp[i - 1][count];

      const previousIndex = previous[i - 1] + 1;
      const base = dp[previousIndex][count - 1];

      const take: State = {
        score: base.score + current.weight,
        indices: addIndex(base.indices, current.index),
      };

      dp[i][count] = getBetter(skip, take);
    }
  }

  return dp[n][4].indices;
}

type State = {
  score: number;
  indices: number[];
};

type Interval = {
  left: number;
  right: number;
  weight: number;
  index: number;
};

function isLexicographicallySmaller(a: number[], b: number[]): boolean {
  const length = Math.min(a.length, b.length);

  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return a[i] < b[i];
    }
  }

  return a.length < b.length;
}

function getBetter(a: State, b: State): State {
  if (a.score !== b.score) {
    return a.score > b.score ? a : b;
  }

  if (isLexicographicallySmaller(a.indices, b.indices)) {
    return a;
  }

  return b;
}

function addIndex(indices: number[], index: number): number[] {
  const result = [...indices, index];

  result.sort((a, b) => a - b);

  return result;
}

function findPrevious(intervals: Interval[], currentIndex: number): number {
  let left = 0;
  let right = currentIndex - 1;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // boundaries must not touch
    if (intervals[mid].right < intervals[currentIndex].left) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
