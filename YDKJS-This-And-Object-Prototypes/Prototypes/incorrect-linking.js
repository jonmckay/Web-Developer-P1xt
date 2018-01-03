/*
*	The examples below are incorrect ways of linking two objects in the Parent-Child inheritance relationship
*/

function Foo() {

}

function Bar() {

}

// doesn't work like you want
Bar.prototype = Foo.prototype;

// works kinda like you want, but with
// side-effects you probably don't want
Bar.prototype = new Foo();


