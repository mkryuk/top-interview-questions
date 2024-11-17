export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length;
  const prefixSum = new Array(n + 1);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  const dequeue: number[] = [];
  let dequeueIndex = 0;
  let result = Infinity;
  for (let i = 0; i <= n; i++) {
    // check if we can find a valid subarray
    while (dequeue.length > dequeueIndex && prefixSum[i] - prefixSum[dequeue[dequeueIndex]] >= k) {
      result = Math.min(result, i - dequeue[dequeueIndex]);
      dequeueIndex++;
    }
    // maintain a monotonic increasing queue
    while (dequeue.length > dequeueIndex && prefixSum[i] <= prefixSum[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    dequeue.push(i);
  }

  return result === Infinity ? -1 : result;
}
