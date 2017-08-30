/* 
	ES5 and later versions of Javascript offer a built in hard-binding utility. Function.prototype.bind
*/

function foo(something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind(obj);

var b = bar(3);	// 2 3
console.log(b);	// 5

