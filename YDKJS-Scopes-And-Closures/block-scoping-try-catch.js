// Try-Catch can be used for block-scoping. In the example below the catch block provides
// block-scoping for 'err'

try {
  undefined();  // used just to force an exception and get to the catch block
}
catch (err) {
  console.log(err);  // works
}

console.log(err);  // reference exception. 'err' not found.
