# jsPrecticeTasks

1. [Speed Typing Test Web](https://github.com/purnima999/jsPrecticeTasks/tree/main/speedTyper).
2. How to convert multi-dimension array into 1-D array [code](https://github.com/purnima999/JavaScript-Solutions/blob/main/two.js).
3. Input: nums = [3,2,4], target = 6
   Output: [1,2]
   
   ```
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
   Input: s = "aab"
   Output: 2
   Input: s = "ab"
   Output: 2
   Input: s = "aa"
   Output: 1

#if any string is having same character side by side then find the largest substring excluding the character
   ```
   var lengthOfLongestSubstring = function (s) {
  let string = s;
  let splittedStr = string?.split("");
  let strLen = string?.length;
  let result = splittedStr?.map((x, i) =>
    splittedStr[i] !== splittedStr[i + 1]
      ? splittedStr.indexOf(splittedStr[i])
      : ""
  );
  let index =
    result?.[0] === "" && result[1] === 0 && result?.length === 2
      ? [1]
      : result?.filter((z, i) => result?.indexOf(z) !== i);
  let duplicateInd = index?.filter((t, i) => index.indexOf(t) === i);
  let diff = strLen - 1 - duplicateInd?.length;
  let Substrlen;
  console.log("98765678", {
    id: index < diff && index.length !== 0,
    fj: index.length === 0,
    idi: diff === -1,
    result,
    index,
    duplicateInd,
    diff
  });
  if (index < diff && index.length !== 0)
    Substrlen = result.slice(index[0] + 2, strLen)?.length;
  else if (result?.length === 1 && result?.[0] === 0)
    Substrlen = result?.length;
  else if (diff === -1) Substrlen = index[0] || 0;
  else if (index.length === 0) Substrlen = result.filter((x) => x !== "")?.length;
  else Substrlen = duplicateInd.length;
  return Substrlen;
}
console.log(lengthOfLongestSubstring("ab"));

5. find longest sub string without repeating a any character
```
var lengthOfLongestSubstring = function (s) {
    var max = 0, current_string = "", i, char, pos;
    let string = s;
    for (i = 0; i < string?.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
};
```


