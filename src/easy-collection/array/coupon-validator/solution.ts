export function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
  const order = ["electronics", "grocery", "pharmacy", "restaurant"] as const;

  const businessRank = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    businessRank.set(order[i], i);
  }

  type Item = { blRank: number; code: string };
  const valid: Item[] = [];
  for (let i = 0; i < code.length; i++) {
    if (!isActive[i]) {
      continue;
    }

    if (!businessRank.has(businessLine[i])) {
      continue;
    }

    if (!isValidCode(code[i])) {
      continue;
    }

    valid.push({ blRank: businessRank.get(businessLine[i])!, code: code[i] });
  }

  valid.sort((a, b) => {
    if (a.blRank !== b.blRank) {
      return a.blRank - b.blRank;
    }
    return a.code < b.code ? -1 : a.code > b.code ? 1 : 0;
  });

  const result: string[] = [];
  for (const item of valid) {
    result.push(item.code);
  }
  return result;
}

function isValidCode(s: string): boolean {
  // non-empty and only [a-zA-Z0-9_]
  if (s.length === 0) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);

    // digits
    if (c >= 48 && c <= 57) {
      continue;
    }
    // uppercase letters
    if (c >= 65 && c <= 90) {
      continue;
    }
    // lowercase letters
    if (c >= 97 && c <= 122) {
      continue;
    }
    // underscore
    if (c === 95) {
      continue;
    }
    return false;
  }
  return true;
}
