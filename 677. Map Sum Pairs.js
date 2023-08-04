// Design a map that allows you to do the following:

// Maps a string key to a given value.
// Returns the sum of the values that have a key with a prefix equal to a given string.
// Implement the MapSum class:

// MapSum() Initializes the MapSum object.
// void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
// int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.

// Input
// ["MapSum", "insert", "sum", "insert", "sum"]
// [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// Output
// [null, null, 3, null, 5]

// Explanation
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);  
// mapSum.sum("ap");           // return 3 (apple = 3)
// mapSum.insert("app", 2);    
// mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)

// Medium 

// https://leetcode.com/problems/map-sum-pairs/


var MapSum = function() {
    this.hash = {};
  };
  
  /** 
   * @param {string} key 
   * @param {number} val
   * @return {void}
   */
  MapSum.prototype.insert = function(key, val) {
      this.hash[key] = val;
  };
  
  /** 
   * @param {string} prefix
   * @return {number}
   */
  MapSum.prototype.sum = function(prefix) {
      let sum = 0;
      Object.keys(this.hash)
        .filter((item) => item.startsWith(prefix))
        .forEach((item) => sum+=this.hash[item]);
  
        return sum;
  };
  
  /** 
   * Your MapSum object will be instantiated and called as such:
   * var obj = new MapSum()
   * obj.insert(key,val)
   * var param_2 = obj.sum(prefix)
   */