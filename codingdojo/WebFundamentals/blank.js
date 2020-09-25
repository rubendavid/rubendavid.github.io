// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( [‘a’,’b’], [1,2] ) should return new array [‘a’,’b’,1,2].

// Extra challenge: Can you make a function that does something similar, but alternates the items? So:
// [2,4,6] and [1,2,3] would be:
// [2,1,4,2,6,3]

function conKitty3(arr, arr2) {
var newArr = [];
if (arr.length >= arr2.length) {
    longArr = arr;
    shortArr = arr2;
} else {
    longArr = arr2;
    shortArr = arr;
}
for (i = 0; i < longArr.length; i++) {
    newArr.push(longArr[i]);
    if (i < shortArr.length) {
    newArr.push(shortArr[i]);
    }
}
return newArr;
}
console.log(conKitty3([1, 2, 3, 4, 5, 6], ["a", "b", "c"]));



function combine(arr, arr2) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
newArr.push(arr2[i]);
  }
  console.log(newArr);
}
combine([2, 4, 6, 7, 8], ["a", "b", "c", "d", "e"]);

function zipper(arr, arr2) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr2[i]);
  }
  console.log(newArr);
}
zipper([2, 4, 6, 7, 8], ["a", "b", "c", "d", "e"]);