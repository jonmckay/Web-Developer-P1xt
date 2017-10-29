/*
*	If only a getter is defined for a property, any assignments to that property will silently be thrown away
*/

var myObject = {
	// define a getter for 'a'
	get a() {
		return 2;
	}
};

myObject.a = 3;

console.log(myObject.a);	// 2

