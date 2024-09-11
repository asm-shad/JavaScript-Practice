
function oddAvg(nums){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 !== 0){
            sum += nums[i];
            count++;
        }
    }
    let avg = sum / count;
    return avg;
}

const nums = [34, 53, 67, 25, 45, 63, 46, 26, 11, 51];
const avg = oddAvg(nums);
console.log("Average of odd numbers is: ", avg);