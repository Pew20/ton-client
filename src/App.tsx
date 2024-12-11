// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import { useCounterContract } from "./hooks/useCounterContract";

function App() {
  const { connected } = useTonConnect();
  const { value, address } = useCounterContract();
  return (
    <>
      <div className="App">
        <div className="Container">
          <TonConnectButton></TonConnectButton>
          <div className="Card">
            <b>Counter Address</b>
            <div className="Hint">{address?.slice(0, 30) + "..."}</div>
          </div>
          <div className="Card">
            <b>Counter Value</b>
            <div>{value ?? "Loading..."}</div>
          </div>
        </div>
      </div>
      <button style={{ color: connected ? "red" : "blue" }}>发送请求</button>
    </>
  );
}

export default App;
