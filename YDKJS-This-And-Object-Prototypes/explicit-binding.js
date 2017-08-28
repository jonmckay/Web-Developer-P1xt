/* 
	Using call or apply functions, we explicitly bind the first parameter of call to this.
*/


function foo() {
	console.log(this.a);
}

var obj = {
	a: 2
};

foo.call(obj);