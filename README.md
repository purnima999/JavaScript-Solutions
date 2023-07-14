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

4. Input: s = "abcabcbb"
   Output: 3
   Explanation: The answer is "abc", with the length of 3.
   Input: s = "bbbbb"
   Output: 1
   Explanation: The answer is "b", with the length of 1.
   Input: s = "pwwkew"
   Output: 3
   Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
   
   var lengthOfLongestSubstring = function (s) {
    let string = s;
    let splittedStr = string?.split("");
    let strLen = string?.length;
    let result = splittedStr?.map((x, i) => (splittedStr[i] !== splittedStr[i + 1]) ? splittedStr.indexOf(splittedStr[i]) : "");
    let index = result?.filter((z, i) => result.indexOf(z) !== i);
    let duplicateInd = index?.filter((t, i) => index.indexOf(t) === i);
    let diff = (strLen - 1) - duplicateInd?.length;
    let Substrlen;
    if (index < diff)
        Substrlen = result.slice(index[0] + 2, strLen)?.length
    else {
        Substrlen = duplicateInd?.length;
    }
    return Substrlen
};

console.log(lengthOfLongestSubstring())

