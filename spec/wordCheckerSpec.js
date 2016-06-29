
describe("the specification for a written user input", function() {

	it("should have a word check function", function() {
		expect(checkWordCount).toBeDefined;
	});
	it("should limit input to < 100 words", function() {
		expect(checkWordCount("my name is earl")).toBeTruthy;
	});
	it("should have a duplicate check function", function() {
		expect(duplicateCheck).toBeDefined;
	});
	it("should not allow duplicate words", function() {
		expect(duplicateCheck(["yo", "yo", "yall"])).toBeFalsy;
	});
	it ("should have a verify alpha numeric function", function(){
		expect(verifyAlphaNumeric).toBeDefined;
	});
	it ("should not allow non-alphaNumeric input", function() {
		expect(verifyAlphaNumeric("howdy&MAT8;")).toBeFalsy;
	});



});