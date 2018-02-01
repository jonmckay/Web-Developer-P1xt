/*
*	One common pattern for type introspection is called duck typing. This is generally the more perferred method over instanceOf.
*	The idea behind this pattern is rather than inspecting a relationship between a1 and the object that holds the delegatble
*	something(), its assumed that a1 passing the test a1.something, will be able to call a1.something().
*/

if(a1.something) {
	a1.something();
}

