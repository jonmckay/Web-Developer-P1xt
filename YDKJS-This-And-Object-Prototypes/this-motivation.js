/* 
	A short example illustrating the motivation and utility of 'this'
	This allows identify() and speak() to be re-used against multiple context objects, rather
	than needing a separate version of the function for each object.
*/

function identify() {
	return this.name.toUpperCase();
}

function speak() {
	var greeting = "Hello, I'm " + identify.call(this);
	console.log(greeting);
}

var me = {
	name: "Jon"
};

var you = {
	name: "Reader"
};

identify.call(me);	// KYLE
identify.call(you);	// READER

speak.call(me);		// Hello, I'm KYLE
speak.call(you);	// Hello, I'm READER


// Example not relying on 'this'. This example is messy and not as elegant
function identifyWithoutThis(context) {
	return context.name.toUpperCase();
}

function speakWithoutThis(context) {
	var greeting = "Hello, I'm " + identifyWithoutThis(context);
	console.log(greeting);
}

identifyWithoutThis(you);
speakWithoutThis(me);