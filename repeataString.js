/*Repeat a String*/
//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.//
/*My solution below*/

function repeatStringNumTimes(str, num) {
  if (num >= 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);

