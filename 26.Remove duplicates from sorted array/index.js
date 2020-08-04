const nums = [1, 1, 2]

function removeDuplicates(nums){
  let p = 0;
  let q = 0;
  while(q<nums.length){
    if(nums[q] !== nums[p]){
      nums[p+1] = nums[q]
      p++
    }
    q++
  }
  return p+1
}

// 解题思路：使用双指针。