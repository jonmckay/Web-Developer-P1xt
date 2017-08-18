/* 
	By naming the object that is being returned, the module instance can be modified from the inside.
	In this example the object accesses the identify1 function. After the publicAPI object changes the return
	value pointer to identify2, the function object is called again.
*/

var foo = (function CoolModule(id) {
	function change() {
		// modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log(id);
	}

	function identify2() {
		console.log(id.toUpperCase());
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})("foo module");

foo.identify();		// foo module
foo.change();
foo.identify();		// FOO MODULE

