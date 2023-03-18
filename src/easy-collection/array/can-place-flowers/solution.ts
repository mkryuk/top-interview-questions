export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (flowerbed[i] === 0) {
      const left = i === 0 || flowerbed[i - 1] === 0;
      const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (left && right) {
        n--;
        // we move cursor one forward 
        // since we should not place new flower nearby
        i++;
      }
    }
  }
  return n === 0;
}
