/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/
//I solved this problem using Javascript array's map method.//

function titleCase(str) {
  var lowerStr = str.toLowerCase();
  var oldArray = lowerStr.split(" ");
   var newArray = oldArray.map(function(element) {
    return element.replace(element[0], element[0].toUpperCase());
    
  });
  
  return newArray.join(" ");
}

titleCase("I'm a little tea pot");
