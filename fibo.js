function fibo (n, memo = {}) {
    if (n === 0 ) return 0;
    if (n === 1 ) return 1

    if(memo[n] !== undefined) return memo[n];

    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)

    return memo[n]

    // return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(80));
