export function wonderfulSubstrings(word: string): number {
  let mask = 0;
  let result = 0;
  const map = new Map<number, number>();
  map.set(0, 1); // There's one way to have zero characters (empty substring)

  for (let char of word) {
    // Flip the bit corresponding to the current character
    mask ^= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));

    // If this mask has been seen before, all substrings formed since the last occurrence are wonderful
    if (map.has(mask)) {
      result += map.get(mask)!;
    }

    // Also consider substrings where exactly one character has an odd count
    for (let i = 0; i < 10; i++) {
      let toggleMask = mask ^ (1 << i);
      if (map.has(toggleMask)) {
        result += map.get(toggleMask)!;
      }
    }

    // Update the count of this mask in the map
    map.set(mask, (map.get(mask) ?? 0) + 1);
  }

  return result;
}
