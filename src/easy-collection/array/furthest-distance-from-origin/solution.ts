export function furthestDistanceFromOrigin(moves: string): number {
  let L = 0;
  let R = 0;
  let B = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "L") {
      L++;
    } else if (move === "R") {
      R++;
    } else {
      B++;
    }
  }
  return Math.abs(L - R) + B;
}
