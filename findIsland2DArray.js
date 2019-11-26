let isSafe = function(a, row, column) {
    if(row >= 0 && column >= 0 && row < a[0].length && column < a.length) {
        if(a[row][column] === 1) {
            return true;
        }
        return false;
    }
    return false;
}

let dfs = function(a, row, column, countIslands) {
    // visited[row][column] = 1;
    a[row][column] = 0;
    countIslands++;
    adjRow = [-1, -1, -1, 0, 0, 1, 1, 1];
    adjCol = [-1, 0, 1, -1, 1, -1, 0, 1];
    for(let i = 0; i < 8; i++) {
        if(isSafe(a, row + adjRow[i], column + adjCol[i])) {
            countIslands = dfs(a, row + adjRow[i], column + adjCol[i], countIslands);
        }
    }
    return countIslands;
}

let countIsland = function(a, rows, column) {
    let count = 0;
    let countIslands = 0;
    let maxIsland = 0;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < column; j++) {
            if(a[i][j] === 1) {
                count++;
                countIslands = dfs(a, i, j, countIslands);
                if(countIslands > maxIsland) {
                    maxIsland =  countIslands;   
                }
                countIslands = 0;
            }
        }
    }
    console.log('Largest Island size ' + maxIsland);
    return count;
}

let main = function() {
    const a = [
        [1,1,0,0,0],
        [0,1,0,0,1],
        [1,0,0,1,1],
        [1,0,0,0,0],
        [1,0,1,1,0]
    ];
    console.log('numbers of islands ' + countIsland(a, a[0].length, a.length));
}

main();
