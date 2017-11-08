/*
*	Arrays have a built-in @@iterator, so for..of works easily on them. The example below manually iterates
*	through the array using the build-in @@iterator to see how it works.
*/

var myArray = [ 1, 2, 3 ];
var it = myArray[Symbol.iterator]();

console.log(it.next());	// { value:1, done: false }
console.log(it.next());	// { value:2, done: false }
console.log(it.next());	// { value:3, done: false }
console.log(it.next());	// { done: true }