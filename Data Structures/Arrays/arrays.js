Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.
You shouldn't use the .filter method here; try to write the algorithm from scratch.

function num(arr) {
	var returnValue = [];
	for(let i=0; i<arr.length; i++) {
		if(arr[i] < 5) {
			returnValue.push(arr[i]);
		}
	}
	return returnValue;
}

Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be
 sorted. For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be 
 [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].


 function merge(arr1, arr2) {
 	let n = [];
 	for(let i = 0; i<arr1.length; i++) {
 		n.push(arr1[i]);
 	}

 	for(let i =0; i<arr2.length; i++) {
 		n.push(arr2[i]);
 	}

 	return n.sort();
 }

Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index. For example, if the input was
 [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).

 function num(arr) {
 	var n = [];
 	for(let i =0; i<arr.length; i++) {
 		var prod = 1;
 		for(let j = 0; j<arr.length; j++) {
 			if(i != j) {
 				prod *= arr[j];
	 		}
		}
		n.push(prod);
	}
 	return n;
 }