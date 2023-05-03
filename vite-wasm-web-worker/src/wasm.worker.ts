import { expose } from "comlink";
import addWasm from "./wasm-module/add.wasm?init";

 const sum = async (a: number, b: number): Promise<number> =>
  new Promise(async resolve => {
    const wasm = await addWasm();
    resolve(wasm.exports.add(a, b))
  });

expose(sum);