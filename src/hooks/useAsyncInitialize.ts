import { useEffect, useState } from "react";

export function useAsyncInitialize<T>(
  func: () => Promise<T>,
  deps: unknown[] = []
) {
  const [state, setState] = useState<T | undefined>();
  useEffect(() => {
    (async () => {
      setState(await func());
    })();
    console.log("invoke", func.name);
  }, [...deps, func]);

  return state;
}
