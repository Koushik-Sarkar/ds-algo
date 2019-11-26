const a = [1,2,4,1,2,5,3,9,7,3,5,11,10,4,15,11,3]; //[1,2,4,5,3,9,7,11,10]
const myObj = {};
b = [];
a.forEach((val, index) => {
    if(!myObj[val]) {
        myObj[val] = 1;
        b.push(val);  
    }
});
console.log(b);
