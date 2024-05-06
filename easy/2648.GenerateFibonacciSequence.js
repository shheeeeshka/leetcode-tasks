const fibGenerator = function* () {
    let x = 0, y = 1;
    while (true) {
        yield x;
        [x, y] = [y, x + y];
    }
};

const gen = fibGenerator();

for (let i = 0; i < 9; i++) {
    let p = gen.next().value;
    console.log(p);
}

// https://leetcode.com/problems/generate-fibonacci-sequence/description/