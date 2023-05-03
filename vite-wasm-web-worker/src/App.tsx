import { useEffect, useState } from 'react';
import { wrap } from "comlink";
import WasmWorker from "./wasm.worker?worker";
const wasmWorker = wrap(new WasmWorker());

export const App = () => {
  const [result, setResult] = useState(0);
  const getResult = async () => {
    const result = await wasmWorker(1, 4);
    setResult(result);
  };
  useEffect(() => {
    getResult();
  }, []);

  return <div>Result is {result}</div>;
};
