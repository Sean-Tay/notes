var maxSubArray = function(nums) {
    // Write your code here
    if (!nums || nums.length === 0) return 0;
    // if (nums.length === 1) return nums[0]

    let sum = nums[0];
    let max = sum;

    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }

        max = Math.max(max, sum);
    }
    
    return max;
};
