const nums = [3, 3]
var containsDuplicate = function(nums) {
    let result = false
    if(nums && nums.length){
        for(let i = 0; i < nums.length; i++){
            for(let j = 1; j < nums.length && (i !== j); j++){
                console.log(i, j)
                if(nums[i] === nums[j]){
                    result = true
                }
            }
        }
    }
    return result
};

let result = containsDuplicate(nums)
console.log(result)