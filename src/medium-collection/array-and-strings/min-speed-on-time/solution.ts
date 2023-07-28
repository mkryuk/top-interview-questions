export function minSpeedOnTime(dist: number[], hour: number): number {
  let left = 0;
  let right = 1e7;
  let result = -1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    let resHour = 0;
    for (let i = 0; i < dist.length - 1; i++) {
      resHour += Math.ceil(dist[i] / mid);
    }
    resHour += dist[dist.length - 1] / mid;
    if (resHour <= hour) {
      result = result === -1 ? mid : Math.min(result, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
