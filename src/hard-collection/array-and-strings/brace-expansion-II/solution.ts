export function braceExpansionII(expression: string): string[] {
  const state: ParserState = {
    expression,
    index: 0,
  };

  const result = parseExpression(state);
  return Array.from(result).sort();
}

interface ParserState {
  expression: string;
  index: number;
}

function concatenate(left: Set<string>, right: Set<string>): Set<string> {
  const result = new Set<string>();

  for (const a of left) {
    for (const b of right) {
      result.add(a + b);
    }
  }

  return result;
}

function parseTerm(state: ParserState): Set<string> {
  if (state.expression[state.index] === "{") {
    state.index++;
    const result = parseExpression(state);

    // skip closing brace
    state.index++;
    return result;
  }

  const char = state.expression[state.index];
  state.index++;
  return new Set<string>([char]);
}

function parseConcatenation(state: ParserState): Set<string> {
  let result = new Set<string>([""]);

  while (
    state.index < state.expression.length &&
    state.expression[state.index] !== "}" &&
    state.expression[state.index] !== ","
  ) {
    const next = parseTerm(state);
    result = concatenate(result, next);
  }

  return result;
}

function parseExpression(state: ParserState): Set<string> {
  const result = parseConcatenation(state);

  while (state.index < state.expression.length && state.expression[state.index] === ",") {
    state.index++;

    const next = parseConcatenation(state);

    for (const word of next) {
      result.add(word);
    }
  }

  return result;
}
