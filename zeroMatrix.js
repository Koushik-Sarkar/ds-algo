let matrix = [
    [1, 2, 0, 7],
    [4, 5, 0, 8],
    [7, 7, 6, 10],
    [11, 5, 3, 2]];

let matrixLength = 4;

/** Check if row and column has zero values */
let rowHasZero = false;
let columnHasZero = false;

for (let i = 0; i < matrixLength; i++) {
    if (matrix[0][i] === 0) {
        rowHasZero = true;
    }
    if (matrix[i][0] === 0) {
        columnHasZero = true;
    }
}

for (let i = 1; i < matrixLength; i++) {
    for (let j = 1; j < matrixLength; j++) {
        if (matrix[i][j] === 0) {
            matrix[0][j] = 0;
            matrix[i][0] = 0;
        }
    }
}

for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
        process.stdout.write(`${matrix[i][j]} `);
    }
    console.log();
}
console.log(rowHasZero);
console.log(columnHasZero);

for (let i = 0; i < matrixLength; i++) {
    if (matrix[0][i] === 0) {
        for (let j = 0; j < matrixLength; j++) {
            matrix[j][i] = 0;
        }
    }
   
    if (matrix[i][0] === 0) {
        for (let j = 0; j < matrixLength; j++) {
            matrix[i][j] = 0;
        }
    }
    if (rowHasZero) {
        matrix[0][i] = 0
    }
    if (columnHasZero) {
        matrix[i][0] = 0
    }
}

for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < matrixLength; j++) {
        process.stdout.write(`${matrix[i][j]} `);
    }
    console.log();
}

