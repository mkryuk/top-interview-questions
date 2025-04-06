export function convertDateToBinary(date: string): string {
  const [yearStr, monthStr, dayStr] = date.split("-");
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);
  return `${toBinaryString(year)}-${toBinaryString(month)}-${toBinaryString(day)}`;
}

function toBinaryString(num: number): string {
  if (num === 0) {
    return "0";
  }
  let result = "";
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}
