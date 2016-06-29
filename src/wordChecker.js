"use strict";



$("#button").click(function() {
let input = $("#input").val();
let check1 = checkWordCount(input) === false ? alert1() : alert2(); 
let check2 = duplicateCheck(input) === false ? alert1() : alert2(); 
let check3 = verifyAlphaNumeric(input) === false ? alert1() : alert2(); 
});

function checkWordCount(input) {
	let arr = input.split(" ").length < 100 ? true : false;
	return arr;
}

function duplicateCheck(input) {
	let arr = input.split(" ").sort();
	let counter = 0;
	arr.forEach(function(currVal, index) {
		if (currVal === arr[index + 1]) {
			counter++; 	
		}
	});
	return counter === 0 ? true : false;

}

function verifyAlphaNumeric(input) {
	let regex = /^[a-zA-Z0-9() ]+$/;
	let tester = regex.test(input);
	return tester;
}


function alert1() {
	alert("NOPE!");
}

function alert2() {
	alert("WootWoot!");
}