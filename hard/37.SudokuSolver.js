import checkSolution from "../checkSolution.js";

const solveSudoku = (board) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num.toString())) {
                        board[i][j] = num.toString();
                        let solved = solveSudoku(board);
                        if (solved !== false) return solved;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return board;
};

const isValid = (board, row, col, n) => {
    for (let p = 0; p < 9; p++) {
        if (board[row][p] === n) return false;
        if (board[p][col] === n) return false;

        let gridValue = board[3 * Math.floor(row / 3) + Math.floor(p / 3)][3 * Math.floor(col / 3) + p % 3];
        if (gridValue === n) return false;
    }

    return true;
}

checkSolution(
    [
        [["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
    ],
    [
        [["5", "3", "4", "6", "7", "8", "9", "1", "2"],
        ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
        ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
        ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
        ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
        ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
        ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
        ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
        ["3", "4", "5", "2", "8", "6", "1", "7", "9"]]
    ],
    solveSudoku
);

// https://leetcode.com/problems/sudoku-solver/description/