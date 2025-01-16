function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine which part is sorted
        if (nums[left] <= nums[mid]) {
            // Left portion is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right portion is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}


module.exports = { search }

if (require.main === module) {  
    console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
    console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
}