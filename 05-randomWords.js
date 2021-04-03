/*
  Create an array of strings and use random() to select random entries and
  add them to a sentence, printing the result to the console.
*/

var strArr = ["Sage", "Brimstone", "Viper", "Skye", "Reyna", "Yoru", "Phoenix",
"Killjoy"];

var randInd = Math.floor(Math.random() * strArr.length);

var resultStr = "Random agent: " + strArr[randInd];

console.log(resultStr);
// console.log("Random agent: " + strArr[randInd]);
