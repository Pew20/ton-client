import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("do");
    const timeId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(timeId);
  }, []);
  // console.log("render", count);
  return <h1>{count}</h1>;
}
