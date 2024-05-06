import checkSolution from "../checkSolution.js";

const countPrimes = (n = 0) => {
    if (n <= 1) {
        return 0;
    }

    let isPrime = new Array(n).fill(true);

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}

checkSolution(
    [10, 0, 1],
    [4, 0, 0],
    countPrimes
);

// https://leetcode.com/problems/count-primes/description/