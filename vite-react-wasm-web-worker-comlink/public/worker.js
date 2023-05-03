importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("/pkg/wasm_module.js");

const { generate } = wasm_bindgen;

const worker = {
  generate: async (width, height, max_iterations) => {
    const start = performance.now();
    await wasm_bindgen("/pkg/wasm_module_bg.wasm");
    const data = generate(width, height, max_iterations);
    const time = performance.now() - start;
    return { time, data };
  },
};

Comlink.expose(worker);
