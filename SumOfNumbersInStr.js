// Calculate sum of consecutive number in a string like str123ghdt456jhg will be 123+456=579

let countNumber = (input) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < input.length; i++) {
        let n = input.charCodeAt(i);
        if(n >= 48 && n <= 57) {
            sum1 *= 10;
            sum1 += parseInt(input.charAt(i));
        } else {
            if(sum1 !== 0) {
                sum2 += sum1;
                sum1 = 0;
            }
        }
    }
    console.log(sum2);
}

countNumber('str123ghdt456jhg');
