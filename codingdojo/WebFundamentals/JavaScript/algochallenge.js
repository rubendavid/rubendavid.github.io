// // Algo Challege for this morning:
// // Array: Push Front
// // Given array and an additional value, insert this
// // value at the beginning of the array. Do this
// // without using any built-in array methods.

// var arr = [1,2,3,4];
// var y = 3;

// // insert value of y into arr[i]
// // not replacing value of arr[i]
// // other numbers in arr move to right

var newArr = [];
newArr.push(y);

for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
}

console.log(newArr);

// // Array: Pop Front
// // Given array, remove and return the value at the
// // beginning of the array. Do this without using any
// // built-in array methods except pop().

// arr = [1,2,3,4]

function popFront(arr) {
    var x = arr[0];

    for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
    }
    arr.pop();
    return x;
}
console.log(popFront([1, 2, 3, 4]));
