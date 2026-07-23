export function maxActiveSectionsAfterTrade(s: string, queries: number[][]): number[] {
  const totalOnes = countOnes(s);
  const candidates = buildCandidates(s);

  if (candidates.length === 0) {
    return new Array(queries.length).fill(totalOnes);
  }

  const starts = candidates.map((candidate) => candidate.oneStart);
  const ends = candidates.map((candidate) => candidate.oneEnd);
  const gains = candidates.map((candidate) => candidate.fullGain);

  const segmentTree = new MaxSegmentTree(gains);
  const result: number[] = [];

  for (const [queryLeft, queryRight] of queries) {
    // first candidate whose one-block starts after queryLeft
    const firstCandidateIndex = upperBound(starts, queryLeft);

    // last candidate whose one-block ends before queryRight
    const lastCandidateIndex = lowerBound(ends, queryRight) - 1;

    if (firstCandidateIndex > lastCandidateIndex) {
      result.push(totalOnes);
      continue;
    }

    if (firstCandidateIndex === lastCandidateIndex) {
      const gain = calculateAdjustedGain(candidates[firstCandidateIndex], queryLeft, queryRight);

      result.push(totalOnes + gain);
      continue;
    }

    const firstGain = calculateAdjustedGain(candidates[firstCandidateIndex], queryLeft, queryRight);

    const lastGain = calculateAdjustedGain(candidates[lastCandidateIndex], queryLeft, queryRight);

    const middleGain = segmentTree.query(firstCandidateIndex + 1, lastCandidateIndex - 1);

    const bestGain = Math.max(firstGain, lastGain, middleGain);

    result.push(totalOnes + bestGain);
  }

  return result;
}

class MaxSegmentTree {
  private readonly size: number;
  private readonly tree: number[];

  constructor(values: number[]) {
    let size = 1;

    while (size < values.length) {
      size *= 2;
    }

    this.size = size;
    this.tree = new Array(size * 2).fill(0);

    for (let i = 0; i < values.length; i++) {
      this.tree[size + i] = values[i];
    }

    for (let i = size - 1; i >= 1; i--) {
      this.tree[i] = Math.max(this.tree[i * 2], this.tree[i * 2 + 1]);
    }
  }

  public query(left: number, right: number): number {
    if (left > right) {
      return 0;
    }

    let currentLeft = left + this.size;
    let currentRight = right + this.size;
    let result = 0;

    while (currentLeft <= currentRight) {
      if (currentLeft % 2 === 1) {
        result = Math.max(result, this.tree[currentLeft]);
        currentLeft++;
      }

      if (currentRight % 2 === 0) {
        result = Math.max(result, this.tree[currentRight]);
        currentRight--;
      }

      currentLeft = Math.floor(currentLeft / 2);
      currentRight = Math.floor(currentRight / 2);
    }

    return result;
  }
}

interface Candidate {
  oneStart: number;
  oneEnd: number;
  leftZeroStart: number;
  rightZeroEnd: number;
  fullGain: number;
}

function buildCandidates(s: string): Candidate[] {
  const candidates: Candidate[] = [];
  const n = s.length;

  let index = 0;

  while (index < n) {
    if (s[index] === "0") {
      index++;
      continue;
    }

    const oneStart = index;

    while (index < n && s[index] === "1") {
      index++;
    }

    const oneEnd = index - 1;

    // a candidate must have a real zero on both sides
    if (oneStart === 0 || oneEnd === n - 1 || s[oneStart - 1] !== "0" || s[oneEnd + 1] !== "0") {
      continue;
    }

    let leftZeroStart = oneStart - 1;

    while (leftZeroStart > 0 && s[leftZeroStart - 1] === "0") {
      leftZeroStart--;
    }

    let rightZeroEnd = oneEnd + 1;

    while (rightZeroEnd + 1 < n && s[rightZeroEnd + 1] === "0") {
      rightZeroEnd++;
    }

    const leftZeroLength = oneStart - leftZeroStart;
    const rightZeroLength = rightZeroEnd - oneEnd;

    candidates.push({
      oneStart,
      oneEnd,
      leftZeroStart,
      rightZeroEnd,
      fullGain: leftZeroLength + rightZeroLength,
    });
  }

  return candidates;
}

function countOnes(s: string): number {
  let result = 0;

  for (const char of s) {
    if (char === "1") {
      result++;
    }
  }

  return result;
}

function upperBound(values: number[], target: number): number {
  let left = 0;
  let right = values.length;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);

    if (values[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
}

function lowerBound(values: number[], target: number): number {
  let left = 0;
  let right = values.length;

  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);

    if (values[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
}

function calculateAdjustedGain(candidate: Candidate, queryLeft: number, queryRight: number): number {
  const includedLeftZeros = candidate.oneStart - Math.max(queryLeft, candidate.leftZeroStart);
  const includedRightZeros = Math.min(queryRight, candidate.rightZeroEnd) - candidate.oneEnd;
  return includedLeftZeros + includedRightZeros;
}
