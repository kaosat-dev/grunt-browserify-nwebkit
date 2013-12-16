//a module that should work both for browser and server side
module.exports.answer = "42";
module.exports.testFunct = function(someVal){

		console.log("i am here ,serious");
		return someVal * 2;
	}
