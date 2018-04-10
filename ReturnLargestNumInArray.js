//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.//
/*for this challenge I used a for loop*/

function largestOfFour(arr) {
  myNewArray = [];
  for (var i=0; i < arr.length; i++) {
    var largestNum = Math.max.apply(Math, arr[i]);
     myNewArray.push(largestNum); 
    }
    
  
  return myNewArray;
}




largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
