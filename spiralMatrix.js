let matrix = [
    [1, 2, 0, 7, 6],
    [4, 5, 0, 8, 8],
    [11, 5, 3, 2, 7],
    [11, 5, 3, 2, 7]];

let matrixRow = 4;
let matrixColumn = 5;

let convertArray = function(matrix, matrixRow, matrixColumn) {
    if(matrixRow <= 0 || matrixColumn <= 0) {
        return [];
    }
    let newArray = new Array(matrixRow*matrixColumn);
    let newArrayCount = 0;
    let level = (matrixRow < matrixColumn) ? Math.ceil(matrixRow/2) : Math.ceil(matrixColumn/2);
    for(let i = 0; i <= level; i++) {
        let column = i, row = i;
        for(let j = column; j < matrixColumn - 1; j++) {
            newArray[newArrayCount++] = matrix[row][j];
            column++;
        }
        for(let k = row; k < matrixRow - 1; k++) {
            newArray[newArrayCount++] = matrix[k][column];  
            row++;  
        }
        for(let j = column; j > i; j--) {
            newArray[newArrayCount++] = matrix[row][j];
            column--;
        }
        for(let k = row; k > i; k--) {
            newArray[newArrayCount++] = matrix[k][column];  
            row--;  
        }
        matrixColumn--;
        matrixRow--;
    }
    return newArray;
}

let main = function() {
    let newArray = convertArray(matrix, matrixRow, matrixColumn);
    newArray.forEach(val => process.stdout.write(`${val} `));
}

main();
