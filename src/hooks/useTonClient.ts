import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient } from "@ton/ton";
import { useAsyncInitialize } from "./useAsyncInitialize";

const initClient = async () =>
  new TonClient({ endpoint: await getHttpEndpoint() });
export function useTonClient() {
  return useAsyncInitialize(initClient);
}
