export function maxPower(stations: number[], r: number, k: number): number {
  // compute base power per city via prefix sums
  const base = buildBasePower(stations, r);

  // set binary search bounds
  // low can start at 0; high can safely be max(base) + k
  let low = 0;
  let high = Math.max(...base) + k;
  let result = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canAchieve(base, r, k, mid)) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

// computes base power for each city: sum of stations within distance r
function buildBasePower(stations: number[], r: number): number[] {
  const n = stations.length;

  // prefix sums for stations
  const pref: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i += 1) {
    pref[i + 1] = pref[i] + stations[i];
  }

  // base[i] = sum(stations[l..u]) where l = max(0, i - r), u = min(n - 1, i + r)
  const base: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i += 1) {
    const l = Math.max(0, i - r);
    const u = Math.min(n - 1, i + r);
    base[i] = pref[u + 1] - pref[l];
  }

  return base;
}

// checks if we can make every city have power >= target using at most k new stations
function canAchieve(base: number[], r: number, k: number, target: number): boolean {
  const n = base.length;

  // diff array to model added stations’ coverage as a sliding window
  // addDiff[t] contributes to current windowAdd starting at index t,
  // and we subtract at t = (placedIndex + r + 1) to end coverage.
  const addDiff: number[] = new Array(n + 1).fill(0);

  let used = 0;
  let windowAdd = 0;

  for (let i = 0; i < n; i += 1) {
    windowAdd += addDiff[i];

    const current = base[i] + windowAdd;
    if (current < target) {
      const need = target - current;

      used += need;
      if (used > k) {
        return false;
      }

      // place 'need' stations at idx = min(n - 1, i + r)
      // this ensures city i is covered now and benefits upcoming cities
      const idx = Math.min(n - 1, i + r);

      // these 'need' stations increase coverage for cities up to idx + r
      windowAdd += need;
      const end = idx + r + 1;
      if (end <= n) {
        addDiff[end] -= need;
      }
    }
  }

  return true;
}
