/*
  Create a function that takes in two arguments and returns a concatenated
  string in the console.
*/

function concatStr(string1, string2) {
  return (string1 + string2);
}

// Test

console.log("Testing concatStr('hi', 'ho')...");
var str1 = "hi";
var str2 = "ho";
console.log(concatStr(str1, str2));
