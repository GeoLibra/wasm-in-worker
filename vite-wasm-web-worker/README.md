# WebAssembliy with WebWorker in Vite

## Using Vite to create the TypeScript React application

```bash
npm init vite@latest vite-wasm-web-worker --template react-ts
```

## install emscription

```bash
# Get the emsdk repo
git clone https://github.com/emscripten-core/emsdk.git

# Enter that directory
cd emsdk

# Download and install the latest SDK tools.
./emsdk install latest

# Make the "latest" SDK "active" for the current user. (writes ~/.emscripten file)
./emsdk activate latest

# Activate PATH and other environment variables in the current terminal
source ./emsdk_env.sh
```

## Start

```bash
npm install

cd wasm-module

emcc add.cpp -s ENVIRONMENT=worker -s MODULARIZE=1 -s EXPORTED_FUNCTIONS="['_add']" -o add.js

npm run dev
```
