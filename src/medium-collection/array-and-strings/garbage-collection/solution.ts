export function garbageCollection(garbage: string[], travel: number[]): number {
  let metalTime = 0;
  let paperTime = 0;
  let glassTime = 0;
  let lastMetal = 0;
  let lastPaper = 0;
  let lastGlass = 0;
  const n = garbage.length;

  // Iterate through each house and calculate collection time
  for (let i = 0; i < n; i++) {
    for (let char of garbage[i]) {
      switch (char) {
        case "M":
          metalTime++;
          lastMetal = i;
          break;
        case "P":
          paperTime++;
          lastPaper = i;
          break;
        case "G":
          glassTime++;
          lastGlass = i;
          break;
      }
    }
  }

  // Pre-calculate the cumulative travel time
  let travelTime = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    travelTime[i] = travelTime[i - 1] + travel[i - 1];
  }

  // Calculate total time for each type of garbage
  metalTime += travelTime[lastMetal];
  paperTime += travelTime[lastPaper];
  glassTime += travelTime[lastGlass];

  return metalTime + paperTime + glassTime;
}
