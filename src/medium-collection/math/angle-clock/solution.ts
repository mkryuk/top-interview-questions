export function angleClock(hour: number, minutes: number): number {
  // minute hand moves 6 degrees per minute
  const minuteAngle = minutes * 6;
  // hour hand moves 30 degrees per hour + 0.5 degrees per minute
  const normalizedHour = hour % 12;
  const hourAngle = normalizedHour * 30 + minutes * 0.5;
  // absolute difference between both hands
  const diff = Math.abs(hourAngle - minuteAngle);
  // return the smaller angle
  return Math.min(diff, 360 - diff);
}
