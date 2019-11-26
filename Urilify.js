let inputString = 'Replace spaces with new charecter sets';
let myArr = [];
let length = inputString.length;

for(let i = 0; i<length; i++) {
    let charecter = inputString.charAt(i);
    if(charecter === ' ') {
        myArr.push('%');
        myArr.push('2');
        myArr.push('0');
    } else {
        myArr.push(charecter);   
    }

}
console.log(myArr.join(''));
