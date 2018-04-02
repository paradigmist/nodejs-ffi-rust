#[no_mangle]
pub extern fn fib(n: i64) -> i64 {
  return match n {
    1 | 2 => 1,
    _ => fib(n - 1) + fib(n - 2)
  }
}
