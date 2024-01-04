export function numberOfBeams(bank: string[]): number {
  let result = 0;
  let firstRowDeviceCount = 0;
  for (const row of bank) {
    let secondRowDeviceCount = countBits(row);
    if (secondRowDeviceCount > 0) {
      result += firstRowDeviceCount * secondRowDeviceCount;
      firstRowDeviceCount = secondRowDeviceCount;
    }
  }
  return result;
}

function countBits(row: string): number {
  let result = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "1") {
      result++;
    }
  }
  return result;
}
