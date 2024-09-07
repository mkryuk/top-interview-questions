type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

export function once(fn: Function): OnceFn {
  let called = false;
  return function (...args) {
    if (called === false) {
      called = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
}
