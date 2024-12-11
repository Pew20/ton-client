// import { useEffect, useState } from "react";
// import Counter from "../contract/counter";
// import { useTonClient } from "./useTonClient";
// import { useAsyncInitialize } from "./useAsyncInitialize";
// import { Address, OpenedContract } from "@ton/core";

export function useCounterContract() {
  // const client = useTonClient();
  // console.log("client", client);
  // const [val, setVal] = useState<null | number>();

  // const counterContract = useAsyncInitialize(async () => {
  //   if (!client) return;
  //   const contract = new Counter(
  //     Address.parse("EQALkEOAHMbt9GFacxCGGa95Y06taqoHf5Qa4MYLA0iYxxMC") // replace with your address from tutorial 2 step 8
  //   );
  //   return client.open(contract) as OpenedContract<Counter>;
  // }, [client]);

  // useEffect(() => {
  //   async function getValue() {
  //     if (!counterContract) return;
  //     setVal(null);
  //     const val = await counterContract.getCounter();
  //     setVal(Number(val));
  //   }
  //   getValue();
  // }, [counterContract]);

  return {
    value: 123,
    address: "19940719",
  };
}
