export function findMinDifference(timePoints: string[]): number {
  const minutes = timePoints.map(timeToMinutes);
  minutes.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < minutes.length; i++) {
    result = Math.min(result, minutes[i] - minutes[i - 1]);
  }

  // special case: compare the first and last times (wrap-around)
  result = Math.min(result, 1440 + minutes[0] - minutes[minutes.length - 1]);
  return result;
}

function timeToMinutes(time: string): number {
  let [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}
