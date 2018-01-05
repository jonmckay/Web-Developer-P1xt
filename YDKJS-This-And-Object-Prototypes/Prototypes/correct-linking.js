/*
*	Below is a comparison of the pre ES6 and Es6 standard techniques for linking Bar.prototype and Foo.prototype
*/

function Foo() {
}

function Bar() {

}

// pre ES6
// throws away default existing 'Bar.prototype'
Bar.prototype = Object.create(Foo.prototype);

// ES6+
// modifies existing 'Bar.prototype'
Object.setPrototypeOf( Bar.prototype, Foo.prototype );