function calculateWaterBetweenTwoBuilding(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    let left_most = numbers[left];
    let right_most = numbers[right];
    let result_max = 0;
    while(left < right) {
        if(left_most < right_most) {
            let result = left_most * (right - (left+1));
            if (result > result_max) result_max = result;
            left_most = numbers[left++];
        } else {
            let result = right_most * (right - (left+1));
            if (result > result_max) result_max = result;
            right_most = numbers[right++];
        }
    }
    return result_max;
}

console.log(calculateWaterBetweenTwoBuilding([2,1,3,4,6,5]));
