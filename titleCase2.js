/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/
//My solution below://

function titleCase(str) {
  var lowerCased = str.toLowerCase();
  var myArray = lowerCased.split(" ");
  for (var i=0; i<myArray.length; i++){
  myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1); 


  } return myArray.join(" ");
} 


