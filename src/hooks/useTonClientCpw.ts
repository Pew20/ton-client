import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";
// import { useAsyncInitialize } from "./useAsyncInitialize";
import { useState, useEffect } from "react";

export function useTonClient() {
  const [state, setState] = useState<TonClient>();
  useEffect(() => {
    async function init() {
      return new TonClient({ endpoint: await getHttpEndpoint() });
    }
    (async () => {
      setState(await init());
    })();
  }, []);

  return state;
}
