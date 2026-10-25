export function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string,
): number {
  const aliceStart = getDayOfYear(arriveAlice);
  const aliceEnd = getDayOfYear(leaveAlice);
  const bobStart = getDayOfYear(arriveBob);
  const bobEnd = getDayOfYear(leaveBob);
  const overlapStart = Math.max(aliceStart, bobStart);
  const overlapEnd = Math.min(aliceEnd, bobEnd);
  return Math.max(0, overlapEnd - overlapStart + 1);
}

function getDayOfYear(date: string): number {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const [month, day] = date.split("-").map(Number);
  let result = day;
  for (let i = 0; i < month - 1; i++) {
    result += daysInMonth[i];
  }

  return result;
}
