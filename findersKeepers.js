/*Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code*/

//My solution below://

function findElement(arr, func) {
  let num=[];
  for (var i=0; i < arr.length; i++){
    if(func(arr[i])){
      num = arr[i];
      return num;
    }
  } return undefined;
}

/*
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
undefined*/