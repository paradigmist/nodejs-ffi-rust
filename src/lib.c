#include <stdio.h>
#include <stdint.h>
#include <inttypes.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

// int64_t fib (int);

// int main () {
// 	printf("%" PRId64 "\n", fib (35));
// 	return 0;
// }

EXPORT int64_t fib (int n) {
	if (n < 3) return 1;
	else
		return (fib (n - 2) + fib (n - 1));
}
