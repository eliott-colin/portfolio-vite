/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */

var findFinalValue = function(nums, original) {
    for (let index = 0; index < nums.length; index++) {
        if(original === nums[index]){
            original = original *2;
            findFinalValue(nums, original);
        }
    }
    return original;
};