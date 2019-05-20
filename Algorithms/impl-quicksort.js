// QS Implementation
function ext_recur_quicksort(arr, getKey) {
	// Base Case
	if (arr.length <= 1) {
		return arr;
	}
	
	// Select Pivot Element as Middle Element
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex];
	let pivotKey = getKey(pivot);
	
	// Initialize Partitions
	let left = [];
	let right = [];
	
	for (let i = 0; i < arr.length; i++) {  
		let currKey = getKey(arr[i]);
	
		if (currKey < pivotKey) {
			left.push(arr[i]);
		} else if (currKey > pivotKey) {
			right.push(arr[i]);
		} else {
			// currKey == pivotKey
			if (i < pivotIndex) {
				left.push(arr[i]);
			} else if (i > pivotIndex) {
				right.push(arr[i]);
			}
		}
	}
	
	return ext_recur_quicksort(left, getKey).concat(pivot , ext_recur_quicksort(right, getKey));
}