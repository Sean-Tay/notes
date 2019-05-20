/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // Pre-Order Traversal
	// Recursive
	function traverse(node) {
		if (!node) return;
		
		console.log(node.val);
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}
	
	// Iterative - Stack
	function traverse(node) {
		if (!node) return;
		
		let tra_stack = [];
		
		tra_stack.push(node);
		while (tra_stack.length !== 0) {
			let curr = tra_stack.pop();
			
			console.log(curr.val);
			if (curr.right) tra_stack.push(curr.right);
			if (curr.left) tra_stack.push(curr.left);
		}
	}

	function traverse(node) {
		if (!node) return;

		let curr = node;
		let tra_stack = [];

		while (curr || tra_stack.length !== 0) {
			if (curr) {
				console.log(curr.val);
				tra_stack.push(curr);
				curr = curr.left;
			} else {
				if (tra_stack.length !== 0) {
					curr = tra_stack.pop();
					curr = curr.right;
				}
			}
		}
	}

	// Iterative - Morris Traversal
	function traverse(node) {
		if (!node) return;
		
		let curr = node;
		while (curr) {
			if (curr.left) {
				// Modified Predecessor Search
				let prev = curr.left;
				while (prev.right && prev.right !== curr) {
					prev = prev.right;
				}
				
				if (prev.right === null) {
					prev.right = curr;
					console.log(curr.val);
					curr = curr.left;
				} else {
					prev.right = null;
					curr = curr.right;
				}
			} else {
				console.log(curr.val);
				curr = curr.right;
			}
		}
	}

// In-Order Traversal
	// Recursive
	function traverse(node) {
		if (!node) return;

		if (node.left) traverse(node.left);
		console.log(node.val);
		if (node.right) traverse(node.right);
	}

	// Iterative - Stack
	function traverse(node) {
		if (!node) return;

		let curr = node;
		let tra_stack = [];

		while (curr || tra_stack.length !== 0) {
			if (curr) {
				tra_stack.push(curr);
				curr = curr.left;
			} else {
				if (tra_stack.length !== 0) {
					curr = tra_stack.pop();
					console.log(curr.val);
					curr = curr.right;
				}
			}
		}
	}
	
	// Iterative - Morris Traversal
	function traverse(node) {
		if (!node) return;
		
		let curr = node;
		while (curr) {
			if (curr.left) {
				// Modified Predecessor Search
				let prev = curr.left;
				while (prev.right && prev.right !== curr) {
					prev = prev.right;
				}
				
				if (prev.right === null) {
					prev.right = curr;
					curr = curr.left;
				} else {
					prev.right = null;
					console.log(curr.val);
					curr = curr.right;
				}
			} else {
				console.log(curr.val);
				curr = curr.right;
			}
		}
	}

// Post-Order Traversal
	// Recursive
	function traverse(node) {
		if (!node) return;

		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
		console.log(node.val);
	}

	// Iterative - Stack
	function traverse(node) {
		if (!node) return;

		let curr = node;
		let tra_stack = [];

		while (curr || tra_stack.length !== 0) {
			if (curr) {
				tra_stack.push(curr);
				tra_stack.push(curr);
				curr = curr.left;
			} else {
				curr = tra_stack.pop();
				
				if (curr === tra_stack[tra_stack.length - 1]) {
					curr = curr.right;
				} else {
					console.log(curr.val);
					curr = null;
				}
			}
		}
	}

	// Iterative - Morris Traversal

// Reverse-Order Traversal
	// Recursive
	function traverse(node) {
		if (!node) return;

		if (node.right) traverse(node.right);
		console.log(node.val);
		if (node.left) traverse(node.left);
	}
	
