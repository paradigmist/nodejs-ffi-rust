# NodeJS FFI with Rust

Using Rust as a NodeJS addon

# Instructions

1. `git clone https://github.com/paradigmist/nodejs-ffi-rust.git`
2. `cd nodejs-ffi-rust`
3. `npm i && cargo build --release`
4. Compile c addon  
    * On MacOS:  
        + `gcc -O3 -dynamiclib -undefined suppress -flat_namespace src/lib.c -o build/libfib.dylib`  
     * On Linux/Solaris/etc:  
        + `gcc -O3 -shared -fpic src/lib.c -o build/libfib.so`  
4. `node fibs.js 35`

Have fun!
