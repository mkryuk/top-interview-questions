export function isMatch(s: string, p: string): boolean {
  const pattern = cleanupPattern(p);
  const cache = new Map<string, boolean>();
  const result = isMatchRecursive(s, pattern, cache);
  return result;
}

// remove recurring asterisks
function cleanupPattern(p: string): string {
  let result: string[] = [];
  for (let i = 0; i < p.length; i++) {
    if (!result.length || p[i] !== "*") {
      result.push(p[i]);
    } else if (result[result.length - 1] !== "*") {
      result.push(p[i]);
    }
  }
  return result.join("");
}

function isMatchRecursive(
  s: string,
  p: string,
  cache: Map<string, boolean>,
): boolean {
  let key = `${s}:${p}`;
  if (cache.has(key)) {
    return cache.get(key)!;
  }
  if (s === p || p === "*") {
    cache.set(key, true);
  } else if (!s.length || !p.length) {
    cache.set(key, false);
  } else if (s[0] === p[0] || p[0] === "?") {
    const result = isMatchRecursive(s.substring(1), p.substring(1), cache);
    cache.set(key, result);
  } else if (p[0] === "*") {
    const result =
      isMatchRecursive(s, p.substring(1), cache) ||
      isMatchRecursive(s.substring(1), p, cache);
    cache.set(key, result);
  } else {
    cache.set(key, false);
  }
  return cache.get(key)!;
}
