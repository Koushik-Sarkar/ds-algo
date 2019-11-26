let addValue = function (v) {
    /** My First Approch 
    let max_value = 0;
    let n = v.length;
    let i = 0;
    while(i < n) {
        if(!v[i]) {
            return max_value;
        }
        if(!v[i+1]) {
            console.log(v[i]);
            max_value += v[i];
            return max_value;
        }
        if(v[i] > v[i+1]) {
            max_value += v[i];
            console.log(v[i]);
            i += 2; 
        } else {
            let k = i+1;
            count = 0;
            while(v[k] && v[k+1] && v[k] < v[k+1]) {
                count++;
                k++
            }
            if(count % 2 !== 0) {
                while(i<=k) {
                    console.log(v[i]);
                    max_value += v[i];
                    i += 2;    
                }
            } else {
                i++;
                while(i<=k) {
                    console.log(v[i]);
                    max_value += v[i];
                    i += 2;    
                }    
            }
        }
    }
    return max_value;
    */
   /** Second approch */
    let n = v.length;
    if (n == 0) {
        return 0;
    }
    if (n === 1) {
        return v[0];
    }
    if (n === 2) {
        return (v[0] > v[1]) ? v[0] : v[1];
    }
    let preValue2 = v[0];
    let preValue1 = (v[0] > v[1]) ? v[0] : v[1];
    for (let i = 2; i < n; i++) {
        if ((v[i] + preValue2) > preValue1) {
            let temp = preValue2;
            preValue2 = preValue1;
            preValue1 = (v[i] + temp);
        } else {
            preValue2 = preValue1;
        }
    }
    return preValue1;
}

let main = function () {
    const a = [3, 2, 4, 1, 6, 7, 8, 9, 10, 4, 5];
    const b = [3, 2, 4, 1, 6, 7, 8, 9, 4, 5];
    const c = [3, 1, 2, 5, 4, 2];
    const d = [10, 9, 8, 5, 4, 6];
    console.log('first ' + addValue(a));
    console.log('Secend ' + addValue(b));
    console.log('Third ' + addValue(c));
    console.log('Fourth ' + addValue(d));
}


main();
