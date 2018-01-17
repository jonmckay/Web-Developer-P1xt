/*
*	Chrome actively keeps track of which functions that do the construction as internal properties.
*	In this example, even though prototype.constructor is given a new name ("Gotcha"), chrome will
*	still print out Foo as the constructor.
*/

function Foo() {}

var a1 = new Foo();

Foo.prototype.constructor = function Gotcha(){};

a1.constructor; // Gotcha(){}
a1.constructor.name; // "Gotcha"

a1; // Foo {}