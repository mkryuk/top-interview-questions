export function isNStraightHand(hand: number[], groupSize: number): boolean {
  const cardCount: { [key: number]: number } = {};

  // 1. Count occurrences of each card.
  for (const card of hand) {
    cardCount[card] = (cardCount[card] || 0) + 1;
  }

  // 2. Sort the unique values.
  const uniqueCards = Object.keys(cardCount)
    .map(Number)
    .sort((a, b) => a - b);

  // 3. Check for consecutive groups.
  for (const card of uniqueCards) {
    const count = cardCount[card];

    if (count > 0) {
      // Iterate for the groupSize, starting from the current card.
      for (let i = 1; i < groupSize; i++) {
        // If the next card (card + i) does not exist or
        // its count is less than the current card's count,
        // it's impossible to form a group. So, return false.
        if (!cardCount[card + i] || cardCount[card + i] < count) {
          return false;
        }

        // If the card exists and its count is sufficient,
        // reduce its count by the current card's count
        // since we are using these cards to form a group.
        cardCount[card + i] -= count;
      }
    }
  }

  return true;
}
