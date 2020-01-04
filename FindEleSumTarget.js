// let a = [2,3,6,1,4,3,8];
// Find the index of the elements for which sum of the elements of that two index is equal to given target (Here 7)
let a = function(arr, target) {
    let x = {};
    arr.forEach((element, index) => {
        if(x[element]) {
            console.log(`${index} ${x[element]}`);
        } else {
            let element1 = target - element; 
            if(element1 > 0)  {
                x[element1] = index;    
            }  
        }
    });
    console.log(x);
}

a([2,3,6,1,4,3,8], 7); // result : 3 2, 4 1 , time - O(n)
