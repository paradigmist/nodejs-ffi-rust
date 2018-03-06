const ffi = require('ffi')

const isWin = /^win/.test(process.platform)
const rust = ffi.Library('target/release/' + (!isWin ? 'lib' : '') + 'ffi', {
  fib: ['int', ['int']]
})

const args = process.argv
if (args.length < 3) {
  console.log('Arguments: ' + args[0] + ' ' + args[1] + ' ???')
  process.exit()
} else if (+args[2] !== +args[2]) {
	console.log('Argument is not a number!')
	process.exit()
}

const input = parseInt(args[2])

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
