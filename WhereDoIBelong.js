/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).*/

//My solution

function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a, b){return a - b;});
  for (var i=0; i<sorted.length; i++){
  if (num <= sorted[i]){
    return i;
  
  } else if(num > Math.max.apply(null, arr)){
    return arr.length;
  
  
  }  
  
} 
  
}

getIndexToIns([40, 60], 50);