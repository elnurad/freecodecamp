//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.//
//My solution below//

function chunkArrayInGroups(arr, size) {
  newArray = [];
  i = 0;
  while(i<arr.length){
    var smallArr = arr.slice(i, i+=size);
    newArray.push(smallArr);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
