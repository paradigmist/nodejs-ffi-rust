const ffi = require('ffi')

const isWin = /^win/.test(process.platform)
const rust = ffi.Library('target/release/' + (!isWin ? 'lib' : '') + 'ffi', {
  fib: ['int', ['int']]
})

if (process.argv.length < 3) {
  console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' ???')
  process.exit()
}

const input = parseInt(process.argv[2])

function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

function benchmark(str, fn) {
	console.time(str)
	console.log(fn(input))
	console.timeEnd(str)
}

benchmark('node', fib)
benchmark('rust', rust.fib)
