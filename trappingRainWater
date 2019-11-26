
function calculateRainWater(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    let left_max = numbers[left];
    let right_max = numbers[right];
    let result = 0;
    while(left < right) {
        if(left_max <= right_max) {
            if(left_max < numbers[left]) {
                left_max = numbers[left];
            } else {
                result += left_max - numbers[left];
            }
            left++;
        } else {
            if(right_max < numbers[right]) {
                right_max = numbers[right];
            } else {
                result += right_max - numbers[right];
            }
            right--;  
        }   
    }
    return result;
}

// console.log(calculateRainWater([1, 5, 4, 2, 3, 2, 4]));
// console.log(calculateRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(calculateRainWater([2, 1, 3, 4, 6, 5]));
