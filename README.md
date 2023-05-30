# jsPrecticeTasks

1. [Speed Typing Test Web](https://github.com/purnima999/jsPrecticeTasks/tree/main/speedTyper).
2. How to convert multi-dimension array into 1-D array [code](https://github.com/purnima999/JavaScript-Solutions/blob/main/two.js).
3. Input: nums = [3,2,4], target = 6
   Output: [1,2]
   
   var twoSum = function (nums, target) {
    if (nums?.length > 0 && target) {
        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target){
                    return [i,j]
                }
            }
        }
    }
};
