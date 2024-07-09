export function averageWaitingTime(customers: number[][]): number {
  let currentTime = 0;
  let totalTime = 0;
  for (const [arrivalTime, cookTime] of customers) {
    if (currentTime < arrivalTime) {
      currentTime = arrivalTime;
    }
    currentTime += cookTime;
    const waitTime = currentTime - arrivalTime;
    totalTime += waitTime;
  }
  return totalTime / customers.length;
}
