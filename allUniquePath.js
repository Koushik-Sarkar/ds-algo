let searchUniquePath = function(rows, columns) {
    let matrix = new Array(rows);
    for(let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns);
    }
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if( i === 0 && j === 0) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = getTopPath(matrix, i, j) + getLeftPath(matrix, i, j);
            }
            
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            process.stdout.write(`${matrix[i][j]} `);
        }
        console.log();
    }
    return matrix[rows-1][columns-1];
}

let getTopPath = function(matrix, i, j) {
    if(i-1>=0 && j >= 0) {
        if(matrix[i-1][j]) {
            return matrix[i-1][j];
        }
        return 0;
    }
    return 0;
}

let getLeftPath = function(matrix, i, j) {
    if(i >= 0 && j-1 >= 0) {
        if(matrix[i][j-1]) {
            return matrix[i][j-1];
        }
        return 0;
    }
    return 0;
}

console.log(searchUniquePath(2,3));
