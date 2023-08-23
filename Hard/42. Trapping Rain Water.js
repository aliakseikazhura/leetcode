// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


// Input: height = [4,2,0,3,2,5]
// Output: 9


// Hard
// https://leetcode.com/problems/trapping-rain-water/


// 2 pointers
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    if (!height.length) return 0;

    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax > height[left]) result += leftMax - height[left];
        if (rightMax > height[right]) result += rightMax - height[right];

        height[left] < height[right] ? left++ : right--;
    }

    return result;
}

