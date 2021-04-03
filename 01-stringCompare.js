/*
 Create a conditional statement that checks if two strings are equal.
 Include an if and else statement. Create an alert() that gives feedback
 based on the string defined. Test your statement with different strings
 to make sure both alerts work.
 */

// Test 1 - Not equal
var string1 = "Hello";
var string2 = "Hi";

// Test 2 - Equal
// var string1 = "Hello";
// var string2 = "Hello";

// Test 3 - Not equal
// var string1 = "?!";
// var string2 = "...";

// Test 4 - Equal
// var string1 = "...";
// var string2 = "...";

if (string1 === string2) {
  alert("'" + string1 + "' and '" + string2 + "' are EQUAL");
}
else {
  alert("'" + string1 + "' and '" + string2 + "' are NOT EQUAL");
}
