/*Check for Palindrome
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*/

function palindrome(str) {
  string = str.replace(/[^A-Z0-9]+/ig, "");
  stringReversed = string.split("").reverse().join("").toLowerCase();
  if (string.toLowerCase() === stringReversed) {// Good luck!
  return true; 
  
  } else {
    return false;
  }
  
  
  }
palindrome("A man, a plan, a canal. Panama");
palindrome("almostomla");
