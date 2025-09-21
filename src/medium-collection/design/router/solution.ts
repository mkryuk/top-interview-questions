type Packet = {
  s: number;
  d: number;
  t: number;
};

export class Router {
  private readonly memoryLimit: number;

  // fifo storage implemented as a queue with a moving head
  private q: Packet[] = [];
  private head: number = 0;

  // key format "s#d#t"
  private seen: Set<string> = new Set();

  // per-destination timestamps are appended in increasing order because addPacket timestamps are non-decreasing
  // we also maintain a start pointer to simulate efficient pops from the front
  private byDest: Map<number, { ts: number[]; start: number }> = new Map();

  constructor(memoryLimit: number) {
    this.memoryLimit = memoryLimit;
  }

  addPacket(source: number, destination: number, timestamp: number): boolean {
    const key: string = this.packKey(source, destination, timestamp);
    if (this.seen.has(key)) {
      return false;
    }

    // evict oldest packet(s) first
    while (this.size() >= this.memoryLimit) {
      this.popFront();
    }

    // push new packet
    const pkt: Packet = { s: source, d: destination, t: timestamp };
    this.q.push(pkt);
    this.seen.add(key);

    // update per-destination structure
    let bucket = this.byDest.get(destination);
    if (!bucket) {
      // create new bucket if none exists
      bucket = { ts: [], start: 0 };
      this.byDest.set(destination, bucket);
    }
    // timestamps arrive in non-decreasing order globally, so per-destination is also non-decreasing
    bucket.ts.push(timestamp);

    // occasionally compact the queue array to avoid unbounded head growth
    // this is optional but keeps memory tidy for long runs
    if (this.head > 0 && this.head * 2 >= this.q.length) {
      // compact only when head crosses half to keep amortized o(1)
      this.q = this.q.slice(this.head);
      this.head = 0;
    }

    return true;
  }

  forwardPacket(): number[] {
    if (this.size() === 0) {
      // nothing to forward
      return [];
    }

    const pkt: Packet = this.popFront();
    return [pkt.s, pkt.d, pkt.t];
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    const bucket = this.byDest.get(destination);
    if (!bucket) {
      // no packets for this destination
      return 0;
    }

    // we will binary search in the active window [start, end) of ts array defined by start pointer
    const arr: number[] = bucket.ts;
    const startIdx: number = bucket.start;
    const n: number = arr.length;

    if (startIdx >= n) {
      // no active timestamps remain
      return 0;
    }

    // find first index with ts >= startTime
    const left: number = this.lowerBound(arr, startIdx, n, startTime);

    // find first index with ts > endTime
    const rightExclusive: number = this.upperBound(arr, startIdx, n, endTime);

    if (left >= rightExclusive) {
      // no timestamps in range
      return 0;
    }

    // count is the number of elements between left and rightExclusive
    return rightExclusive - left;
  }

  // current number of stored packets
  private size(): number {
    return this.q.length - this.head;
  }

  // remove and return the oldest packet; assumes size() > 0
  private popFront(): Packet {
    // pop from queue head
    const pkt: Packet = this.q[this.head];
    this.head += 1;

    // remove from seen set
    const key: string = this.packKey(pkt.s, pkt.d, pkt.t);
    if (this.seen.has(key)) {
      this.seen.delete(key);
    }

    // update per-destination index: since removals are fifo and inserts for a destination are in order,
    // the removed packet is always the earliest active timestamp for that destination
    const bucket = this.byDest.get(pkt.d);
    if (bucket) {
      // advance start pointer while matching the removed timestamp
      // it should match exactly once
      if (bucket.start < bucket.ts.length && bucket.ts[bucket.start] === pkt.t) {
        bucket.start += 1;
      } else {
        // in theory this should not happen; keep safe fallback by scanning forward minimally
        // this is o(k) only in an inconsistent state which should not occur
        while (bucket.start < bucket.ts.length && bucket.ts[bucket.start] < pkt.t) {
          bucket.start += 1;
        }
        if (bucket.start < bucket.ts.length && bucket.ts[bucket.start] === pkt.t) {
          bucket.start += 1;
        }
      }

      // optional compaction to keep arrays small: if start passes half, slice it
      if (bucket.start > 0 && bucket.start * 2 >= bucket.ts.length) {
        bucket.ts = bucket.ts.slice(bucket.start);
        bucket.start = 0;
      }

      // if bucket becomes empty, we can delete it
      if (bucket.start >= bucket.ts.length) {
        this.byDest.delete(pkt.d);
      }
    }

    return pkt;
  }

  private packKey(s: number, d: number, t: number): string {
    return `${s}#${d}#${t}`;
  }

  // classic lower_bound on arr[l..r) for first index with value >= target
  private lowerBound(arr: number[], l: number, r: number, target: number): number {
    while (l < r) {
      const m: number = l + ((r - l) >> 1);
      if (arr[m] < target) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l;
  }

  // classic upper_bound on arr[l..r) for first index with value > target
  private upperBound(arr: number[], l: number, r: number, target: number): number {
    while (l < r) {
      const m: number = l + ((r - l) >> 1);
      if (arr[m] <= target) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l;
  }
}
