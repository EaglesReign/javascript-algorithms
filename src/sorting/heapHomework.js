//Phil Hofer
//4/20/15
//heapHomework.js
//This program creates an array of 50 random numbers, displays it, 
//heapsorts it, then displays it again.

//store call to heapsort in variable sort
var sort = require('./heapsort').heapSort;

//create 50 random element array
var nums = [];
for (var i = 0; i < 50; ++i) {
  nums[i] = Math.floor(Math.random() * 51);
}

//function to display the array
function dispArr(arr) {
  for (var i = 0; i < arr.length; ++i) {
    process.stdout.write(arr[i] + " ");
    if (i % 10 == 9) {
      process.stdout.write("\n");
    }
  }

  if (i % 10 != 0) {
    process.stdout.write("\n");
  }
}

console.log("This array is unsorted: "); //label the following array as unsorted
dispArr(nums); //display unsorted array
sort(nums); //call to heapsort, sorts the array
console.log("This array is sorted: "); //label array as sorted
dispArr(nums); //display sorted array
