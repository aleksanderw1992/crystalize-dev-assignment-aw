// bubble sort
function sort(arr) {
  var swapInIterationOccurred;
  var temp;
  do {
    swapInIterationOccurred = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapInIterationOccurred = true;
      }
    }
  } while (swapInIterationOccurred);
  return arr;
}

// console.log(sort([1,5,2,30,-1,0,100,2]));
