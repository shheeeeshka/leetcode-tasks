import checkSolution from "../checkSolution.js";

const fib = (n) => {
    const m = {}
    return fibHelper(n, m);
};

const fibHelper = (n, memo) => {
    if (n <= 1) {
        return n;
    }

    if (n in memo) {
        return memo[n];
    }

    const res = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
    memo[n] = res;

    return memo[n];
}

checkSolution(
    [2, 3, 4, 10, 21, 33],
    [1, 2, 3, 55, 10946, 3524578],
    fib
);

// https://leetcode.com/problems/fibonacci-number/description/