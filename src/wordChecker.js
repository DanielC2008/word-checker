"use strict";

let input = "yo everybody yo mate888*";

function checkWordCount(input) {
	let arr = input.split(" ");
	duplicateCheck(arr);
	return arr.length < 100 ? true : false;
}

function duplicateCheck(arr) {
	let counter = 0;
	let newArr = arr.sort();
	newArr.forEach(function(currVal, index) {
		if (currVal === newArr[index + 1]) {
			counter++; 	
		}
	});
	return counter.length === 0 ? true : false;

}

function verifyAlphaNumeric(input) {
	let regex = /^[A-Za-z0-9]/;
	return regex.test(input);
}








checkWordCount(input);