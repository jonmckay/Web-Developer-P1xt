// In the example below i=3 will overwrite 'i' in bar declared in foo() at the foor loop. This collision
// avoidance can be avoided by declaring var i = 3 or by using a different variable name like 'j' in the for loop

// WARNING THIS CAUSES AN INFINITE LOOP. FORCE CLOSE IF RUNNING

function foo() {
  function bar(a) {
    i = 3;
    console.log(a + i);
  }
  
  for(var i = 0; i < 10; i++) {
    bar(i * 2);   // infinite loop
  }
}
foo();
