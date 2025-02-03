const SIZE = 9;
const BOX_SIZE = 3;

export async function solveSudokuService(sudoku: string[][]) {
    console.log("solving sudoku");
    if (solveSudoku(sudoku, 0, 0))
        return sudoku;
    return null;
}

function solveSudoku(sudoku: string[][], row: number, col: number) {
    if (row === SIZE - 1 && col === SIZE)
        return true

    if (col === SIZE) {
        row++
        col = 0
    }

    if (sudoku[row][col] !== '.')
        return solveSudoku(sudoku, row, col + 1);

    for (let num = 1; num <= SIZE; num++) {
        if (!isValidsudoku(sudoku, row, col, num.toString()))
            continue
        sudoku[row][col] = num.toString();
        if (solveSudoku(sudoku, row, col + 1))
            return true;
        sudoku[row][col] = '.';
    }
    return false;
}

function isValidRow(sudoku: string[][], row: number, num: string) {
    for (let i = 0; i < SIZE; i++) {
        if (sudoku[row][i] === num)
            return false;
    }
    return true;
}

function isValidCol(sudoku: string[][], col: number, num: string) {
    for (let i = 0; i < SIZE; i++) {
        if (sudoku[i][col] === num)
            return false;
    }
    return true;
}

function isValidBox(sudoku: string[][], row: number, col: number, num: string) {
    for (let i = row; i < row + BOX_SIZE; i++) {
        for (let j = col; j < col + BOX_SIZE; j++) {
            if (sudoku[i][j] === num)
                return false;
        }
    }
    return true;
}

function isValidsudoku(sudoku: string[][], row: number, col: number, num: string) {
    if (isValidRow(sudoku, row, num) && isValidCol(sudoku, col, num) && isValidBox(sudoku, Math.floor(row / 3) * 3, Math.floor(col / 3) * 3, num)) {
        return true;
    }
}