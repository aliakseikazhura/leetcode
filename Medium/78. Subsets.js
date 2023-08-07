// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.


// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Input: nums = [0]
// Output: [[],[0]]

// Medium 
// https://leetcode.com/problems/subsets/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]];
    dfs([], 0);    
    return result;

    function dfs(path, index) {
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            result.push([...path]);

            dfs(path, i + 1);
            
            path.pop();
        }
    }
};



function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}