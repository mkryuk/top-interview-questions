export function replaceNonCoprimes(nums: number[]): number[] {
  // stack to hold the current canonical sequence
  const st: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    st.push(nums[i]);

    // try to merge backwards while the top two are non-coprime
    while (st.length >= 2) {
      const b = st[st.length - 1];
      const a = st[st.length - 2];
      const g = gcd(a, b);

      if (g > 1) {
        // merge into lcm and continue checking with new neighbor
        const merged = lcm(a, b);
        st.pop();
        st.pop();
        st.push(merged);
      } else {
        // stop if adjacent are coprime
        break;
      }
    }
  }

  return st;
}

// lcm using gcd
function lcm(a: number, b: number): number {
  const g = gcd(a, b);
  // divide first to reduce overflow risk
  return (a / g) * b;
}

function gcd(a: number, b: number): number {
  // ensure non-negative
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  while (b !== 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}
