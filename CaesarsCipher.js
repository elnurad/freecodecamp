/*One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
// My solution below:


function rot13(str) {
  var newStr = "";
  for (var i=0; i<str.length; i++){
    var regexn =/[A-Z]/;
    if(str[i].match(regexn)){
    var charInd = str.charCodeAt(i);
    if(charInd <=77){
      newStr = newStr.concat(String.fromCharCode(charInd + 13));
      } else if(charInd > 77){
        newStr = newStr.concat(String.fromCharCode(charInd - 13));
      }} else {
        newStr = newStr.concat(str[i]);
      }
    
      
    }
  return newStr;
      }
 


// Change the inputs below to test
rot13("SERR PBQR PNZC");


