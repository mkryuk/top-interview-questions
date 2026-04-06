export function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "U") {
      y++;
    } else if (move === "D") {
      y--;
    } else if (move === "L") {
      x--;
    } else if (move === "R") {
      x++;
    }
  }
  return x === 0 && y === 0;
}
