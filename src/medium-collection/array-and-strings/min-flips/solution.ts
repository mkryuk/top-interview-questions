export function minFlips(a: number, b: number, c: number): number {
  let ba = a.toString(2);
  let bb = b.toString(2);
  let bc = c.toString(2);
  let len = Math.max(ba.length, bb.length, bc.length);
  ba = ba.padStart(len, "0");
  bb = bb.padStart(len, "0");
  bc = bc.padStart(len, "0");
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (bc[i] === "1" && ba[i] !== "1" && bb[i] !== "1") {
      result++;
    }
    if (bc[i] === "0" && ba[i] !== "0") {
      result++;
    }
    if (bc[i] === "0" && bb[i] !== "0") {
      result++;
    }
  }

  return result;
}
