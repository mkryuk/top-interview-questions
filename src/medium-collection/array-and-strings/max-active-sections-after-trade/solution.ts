export function maxActiveSectionsAfterTrade(s: string): number {
  const zeroBlocks: number[] = [];
  let activeSections = 0;
  let index = 0;

  while (index < s.length) {
    if (s[index] === "1") {
      activeSections++;
      index++;
      continue;
    }

    let zeroCount = 0;

    while (index < s.length && s[index] === "0") {
      zeroCount++;
      index++;
    }

    zeroBlocks.push(zeroCount);
  }

  let maximumGain = 0;

  for (let i = 1; i < zeroBlocks.length; i++) {
    const gain = zeroBlocks[i - 1] + zeroBlocks[i];
    maximumGain = Math.max(maximumGain, gain);
  }

  return activeSections + maximumGain;
}
