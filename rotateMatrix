let rotateMatrix = function (a, length) {
    let n = length - 1;
    let k = n;
    for (let i = 0; i < n ; i++ , k--) {
        for (let j = i; j < k; j++) {
            let temp1 = a[j][n - i];
            a[j][n - i] = a[i][j];
            let temp2 = a[n - i][n - j];
            a[n - i][n - j] = temp1;
            temp1 = a[n - j][i];
            a[n - j][i] = temp2;
            a[i][j] = temp1;
        }
    }
    console.log();
    printMatrix(a, length);
}

let printMatrix = function (a, length) {
    const n = length - 1;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            process.stdout.write(`${a[i][j]} `);
        }
        console.log();
    }
}

let main = function (length) {
    const a = [];
    let k = 10;
    const n = length - 1;
    for (let i = 0; i <= n; i++) {
        const b = [];
        for (let j = 0; j <= n; j++) {
            b.push(k++);
        }
        a.push(b);
    }
    printMatrix(a, length);
    rotateMatrix(a, length);
}

main(8);
