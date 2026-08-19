export function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  const reservedByRow = buildReservedRows(reservedSeats);

  // every untouched row can always fit two families
  let result = (n - reservedByRow.size) * 2;

  for (const reservedMask of reservedByRow.values()) {
    result += getFamiliesForRow(reservedMask);
  }

  return result;
}

function buildReservedRows(reservedSeats: number[][]): Map<number, number> {
  const reservedByRow = new Map<number, number>();

  for (const [row, seat] of reservedSeats) {
    // seats 1 and 10 never belong to any valid four-seat block
    if (seat === 1 || seat === 10) {
      // still store the row because it must not be counted as an untouched row
      if (!reservedByRow.has(row)) {
        reservedByRow.set(row, 0);
      }

      continue;
    }

    const mask = reservedByRow.get(row) ?? 0;

    // bit 0 represents seat 1, bit 1 seat 2, etc.
    reservedByRow.set(row, mask | (1 << (seat - 1)));
  }

  return reservedByRow;
}

function getFamiliesForRow(reservedMask: number): number {
  const leftMask = createSeatMask(2, 5);
  const middleMask = createSeatMask(4, 7);
  const rightMask = createSeatMask(6, 9);

  const leftAvailable = (reservedMask & leftMask) === 0;
  const middleAvailable = (reservedMask & middleMask) === 0;
  const rightAvailable = (reservedMask & rightMask) === 0;

  // left and right blocks do not overlap, so we can place two families
  if (leftAvailable && rightAvailable) {
    return 2;
  }

  // otherwise at most one of the three blocks can be used
  if (leftAvailable || middleAvailable || rightAvailable) {
    return 1;
  }

  return 0;
}

function createSeatMask(startSeat: number, endSeat: number): number {
  let mask = 0;

  for (let seat = startSeat; seat <= endSeat; seat++) {
    mask |= 1 << (seat - 1);
  }

  return mask;
}
