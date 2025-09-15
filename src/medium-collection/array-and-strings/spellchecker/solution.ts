export function spellchecker(wordlist: string[], queries: string[]): string[] {
  const exact: Set<string> = new Set();
  const caseInsensitive: Map<string, string> = new Map();
  const vowelMasked: Map<string, string> = new Map();

  for (let i = 0; i < wordlist.length; i += 1) {
    const w = wordlist[i];
    exact.add(w);

    const low = w.toLowerCase();
    if (!caseInsensitive.has(low)) {
      caseInsensitive.set(low, w);
    }

    const m = mask(w);
    if (!vowelMasked.has(m)) {
      vowelMasked.set(m, w);
    }
  }

  const res: string[] = new Array(queries.length);
  for (let i = 0; i < queries.length; i += 1) {
    const q = queries[i];

    if (exact.has(q)) {
      res[i] = q;
      continue;
    }

    const low = q.toLowerCase();
    if (caseInsensitive.has(low)) {
      res[i] = caseInsensitive.get(low)!;
      continue;
    }

    const qm = mask(q);
    if (vowelMasked.has(qm)) {
      res[i] = vowelMasked.get(qm)!;
      continue;
    }

    res[i] = "";
  }

  return res;
}

function mask(s: string): string {
  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"]);

  const lower = s.toLowerCase();
  let out = "";
  for (let i = 0; i < lower.length; i += 1) {
    const ch = lower[i];
    if (vowels.has(ch)) {
      out += "*";
    } else {
      out += ch;
    }
  }
  return out;
}
