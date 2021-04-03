/*
  Create a function that takes in one argument that is passed through a
  conditional statement. (For example, something like our haunted house
  door() function.) Print some resulting text to the console. Test all of
  your conditions to make sure you can receive all of your results back.
*/

function flower(num) {
  if (num === 1)
    console.log("Rose");
  else if (num === 2)
    console.log("Lily");
  else if (num === 3)
    console.log("Daffodil");
  else
    console.log("Violet");
}

console.log("Testing flower(1)...");
flower(1);

console.log("Testing flower(2)...");
flower(2);

console.log("Testing flower(3)...");
flower(3);

console.log("Testing flower(4)...");
flower(4);
