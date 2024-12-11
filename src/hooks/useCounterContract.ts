import { useEffect, useState } from "react";
import Counter from "../contract/counter";
import { useTonClient } from "./useTonClient";
// import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "@ton/core";

export function useCounterContract() {
  const client = useTonClient();
  const [val, setVal] = useState<null | number>();
  const [contract, setContract] = useState<OpenedContract<Counter>>();
  const { sender } = useTonConnect();

  const sleep = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    if (!client) return;
    const counter = new Counter(
      Address.parse("EQALkEOAHMbt9GFacxCGGa95Y06taqoHf5Qa4MYLA0iYxxMC") // replace with your address from tutorial 2 step 8
    );
    setContract(client.open(counter));
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!contract) return;
      setVal(null);
      const val = await contract.getCounter();
      setVal(Number(val));
      await sleep(5000);
      getValue();
    }
    getValue();
  }, [contract]);

  return {
    value: val,
    address: contract?.address.toString(),
    sendIncrement: () => {
      return contract?.sendIncrement(sender);
    },
  };
}
