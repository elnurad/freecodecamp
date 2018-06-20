/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

//My solution below://

function booWho(bool) {
  if(bool === true || bool === false) {
    return true;
  
  } else {
    return false;
  }
  
}

/*
booWho(true);
true
booWho(false);
true
booWho([1,3,8]);
false*/