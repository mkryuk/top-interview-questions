import { parseBoolExpr } from "./solution";

describe("Parsing A Boolean Expression", () => {
  it('parseBoolExpr should return false for expression = "&(|(f))"', () => {
    const expression = "&(|(f))";
    const result = parseBoolExpr(expression);
    expect(result).toBeFalse();
  });

  it('parseBoolExpr should return true for expression = "|(f,f,f,t)"', () => {
    const expression = "|(f,f,f,t)";
    const result = parseBoolExpr(expression);
    expect(result).toBeTrue();
  });

  it('parseBoolExpr should return true for expression = "!(&(f,t))"', () => {
    const expression = "!(&(f,t))";
    const result = parseBoolExpr(expression);
    expect(result).toBeTrue();
  });
});
