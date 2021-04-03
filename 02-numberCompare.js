/*
  Create a conditional statement that compares two numbers. You can choose
  if those numbers will be equal ==, less than <, greater than >, less than
  or equal to <=, or greater than or equal to >= each other. Include an if,
  else if, and else statement. Create an alert() that gives feedback based on
  the number. Test your statement with different numbers to make sure all
  alerts work.
*/

// Test 1 - num1 > 2
// var num1 = 3;
// var num2 = 2;

// Test 2 - num1 < 2
// var num1 = 1;
// var num2 = 2;

// Test 3 - num1 = 2
var num1 = 2;
var num2 = 2;

if (num1 === num2)
  alert(num1 + " = " + num2);
else if (num1 < num2)
  alert(num1 + " < " + num2);
else
  alert(num1 + " > " + num2);
