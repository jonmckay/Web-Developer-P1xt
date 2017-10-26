/*
*	Object.freeze() creates a frozen object, which means its takes an
*	existing object and essentially calls Object.seal() on it, but
*	also marks all data accessor properties as writable:false, so that their
*	values cannot be changed
*/

var myObject = {

};

Object.freeze( myObject );

