import React, { useRef, useState } from "react";
import { Remote, wrap } from "comlink";

const WIDTH = 1000;
const HEIGHT = 800;

const w = new Worker("/worker.js");
const worker: Remote<{
  generate: (
    width: number,
    height: number,
    max_iterations: number
  ) => Promise<{ time: number; data: Uint8ClampedArray }>;
}> = wrap(w);

export const App: React.FC<{}> = ({}) => {
  const [time, setTime] = useState("");
  const canvas = useRef<HTMLCanvasElement>(null);
  return (
    <div>
      <button
        onClick={() => {
          console.log("call web worker");
          worker.generate(WIDTH, HEIGHT, 1000).then(({ time, data }) => {
            if (canvas.current) {
              const ctx = canvas.current.getContext("2d");
              setTime(`${time.toFixed(2)} ms`);
              ctx?.putImageData(new ImageData(data, WIDTH, HEIGHT), 0, 0);
            }
          });
        }}
      >
        generate
      </button>
      <div>{time}</div>
      <canvas ref={canvas} width={WIDTH} height={HEIGHT}></canvas>
    </div>
  );
};
