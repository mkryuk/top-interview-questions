export function findLexSmallestString(s: string, a: number, b: number): string {
  const n: number = s.length;

  // compute additive step cycle length.
  // since digits are mod 10, adding 'a' repeatedly cycles every (10 / gcd(10, a)) steps.
  const step: number = 10 / gcd(10, a);

  // track the best (lexicographically smallest) string found
  let best: string = s;

  // iterate over all unique right rotations reachable by repeatedly adding b
  for (let t = 0; t < n; t++) {
    const r: number = (t * b) % n;
    const rotated: string = rotateRight(s, r);

    // try every possible addition on odd indices
    for (let j = 0; j < step; j++) {
      const addOdd: number = (j * a) % 10;

      if ((b & 1) === 0) {
        // case 1: b is even
        // rotation preserves parity, so even positions never become odd.
        // only odd indices can be changed.
        const cand: string = applyAdds(rotated, addOdd, 0);
        if (cand < best) {
          best = cand;
        }
      } else {
        // case 2: b is odd
        // rotation swaps parity; this allows modifying even indices too.
        for (let k = 0; k < step; k++) {
          const addEven: number = (k * a) % 10;
          const cand: string = applyAdds(rotated, addOdd, addEven);
          if (cand < best) {
            best = cand;
          }
        }
      }
    }
  }

  return best;
}

function gcd(x: number, y: number): number {
  // compute greatest common divisor using euclidean algorithm
  while (y !== 0) {
    const t: number = x % y;
    x = y;
    y = t;
  }
  return x;
}

function rotateRight(str: string, k: number): string {
  // rotate string right by k positions
  // example: "3456" rotated right by 1 -> "6345"
  const n: number = str.length;

  // normalize k to avoid redundant rotations
  k = ((k % n) + n) % n;

  if (k === 0) {
    // no rotation needed
    return str;
  } else {
    // slice the tail and prepend it
    return str.slice(n - k) + str.slice(0, n - k);
  }
}

function applyAdds(str: string, addOdd: number, addEven: number): string {
  // apply additive shifts to digits:
  // - all odd indices increased by addOdd (mod 10)
  // - all even indices increased by addEven (mod 10)
  const n: number = str.length;
  const out: string[] = new Array(n);

  for (let i = 0; i < n; i++) {
    // convert char to digit
    const d: number = str.charCodeAt(i) - 48;

    // choose which delta to add based on index parity
    let delta: number;
    if ((i & 1) === 1) {
      delta = addOdd;
    } else {
      delta = addEven;
    }

    // compute new digit mod 10
    const nd: number = (d + delta) % 10;

    // convert back to char
    out[i] = String.fromCharCode(48 + nd);
  }

  return out.join("");
}
