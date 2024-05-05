type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

export function once(fn: Function): OnceFn {
  var called = false;

  return function (...args) {
    return undefined;
  };
}
