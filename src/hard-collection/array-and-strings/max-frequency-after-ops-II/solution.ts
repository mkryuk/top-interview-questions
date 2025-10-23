export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  if (numOperations === 0) {
    return maxExistingFrequency(nums);
  }

  // build frequency of existing values
  const freq: Map<number, number> = buildFrequencyMap(nums);

  // collect distinct targets we must query cover() for (the existing values)
  const targets: number[] = Array.from(freq.keys()).sort((a, b) => a - b);

  // build sweep events: +1 at (ai - k), -1 at (ai + k + 1)
  const events: Array<[number, number]> = buildEvents(nums, k);

  // merge-sweep over events and targets to compute:
  // - best_with_existing = max over v in targets of min( cover(v), freq(v) + numOperations )
  // - bestOverlap = global max cover(x) over all integer x
  const { bestWithExisting, bestOverlap } = sweepAndEvaluate(events, targets, freq, numOperations);

  // consider also any x not equal to existing values (eq(x)=0)
  const bestWithoutExisting: number = Math.min(numOperations, bestOverlap);

  // final answer is the max of both scenarios
  return Math.max(bestWithExisting, bestWithoutExisting);
}

function maxExistingFrequency(nums: number[]): number {
  const m: Map<number, number> = buildFrequencyMap(nums);
  let best: number = 0;
  for (const c of m.values()) {
    if (c > best) {
      best = c;
    }
  }
  return best;
}

function buildFrequencyMap(nums: number[]): Map<number, number> {
  const m: Map<number, number> = new Map();
  for (const x of nums) {
    const c: number = (m.get(x) ?? 0) + 1;
    m.set(x, c);
  }
  return m;
}

function buildEvents(nums: number[], k: number): Array<[number, number]> {
  // we'll aggregate deltas by position to keep the sweep compact
  const deltas: Map<number, number> = new Map();

  for (const a of nums) {
    const L: number = a - k;
    const Rplus1: number = a + k + 1;

    // add +1 at L
    deltas.set(L, (deltas.get(L) ?? 0) + 1);

    // add -1 at R+1
    deltas.set(Rplus1, (deltas.get(Rplus1) ?? 0) - 1);
  }

  // turn into a sorted array of [pos, deltaSum]
  const events: Array<[number, number]> = Array.from(deltas.entries());
  events.sort((e1, e2) => e1[0] - e2[0]);

  return events;
}

function sweepAndEvaluate(
  events: Array<[number, number]>,
  targets: number[],
  freq: Map<number, number>,
  numOperations: number,
): { bestWithExisting: number; bestOverlap: number } {
  let idx: number = 0; // index into events
  let cover: number = 0; // current overlap count after applying events up to current position
  let bestOverlap: number = 0; // global max cover(x)
  let bestWithExisting: number = 0;

  // two-pointer sweep through targets (sorted) while applying all events with pos <= target
  for (const t of targets) {
    // apply all event deltas at positions <= t
    while (idx < events.length && events[idx][0] <= t) {
      cover += events[idx][1];
      // after applying this position's total delta, cover equals cover(x) for all integer x >= this pos until next event
      if (cover > bestOverlap) {
        bestOverlap = cover;
      }
      idx++;
    }

    // now cover is cover(t); evaluate candidate using eq(t)
    const eqT: number = freq.get(t) ?? 0;
    const candidate: number = Math.min(cover, eqT + numOperations);
    if (candidate > bestWithExisting) {
      bestWithExisting = candidate;
    }
  }

  // finish processing remaining events to ensure bestOverlap is truly global
  while (idx < events.length) {
    cover += events[idx][1];
    if (cover > bestOverlap) {
      bestOverlap = cover;
    }
    idx++;
  }

  return { bestWithExisting, bestOverlap };
}
