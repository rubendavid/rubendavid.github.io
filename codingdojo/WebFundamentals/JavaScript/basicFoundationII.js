// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".
//    Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

// sudo code
// 1. function
// 2. we need a for loop that checks every value on the given array
// 3. we need a conditional to check if the value is less than 0

function posNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr[i] = "big";
    }
  }
  return arr;
}

// var arr = [-1,3,5,-5]
// console.log(posNum(arr))

// 2. Print Low, Return High - Create a function that takes in an array of numbers.
//    The function should print the lowest value in the array, and return the highest value in the array.

// sudo code
// 1. Declare function: printHigh()
// 2. Declare a variable "low" / "high"
// 3. Declare a for loop
// 4. Compare the numbers to log out our values

function printHigh(arr) {
  var low = arr[0]; // 2
  var high = arr[0]; // 2

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

// var nums = [2, 3, 50, 20, 21, 49];
// console.log(printHigh(nums));

// 3. Print One, Return Another - Build a function that takes in an array of numbers.
// The function should print the second-to-last value in the array, and return the first odd value in the array.

// sudo code
// 1. function name: seconLast()
// 2. declare firstOdd = 0;
// 3. declare secLast = 0;
// 4. for loop to iterate the given array
// 5. conditional to check the value is odd
// 6. After we find a first odd number by iterating, we are going to break out of the for loop
// 7. print out second last value of the array
// 8. return the first odd value

function secondLast(arr) {
  console.log(arr[arr.length - 2]); // printing out the second last value

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      var firstOdd = arr[i];
      return firstOdd; // get out of the function
    }
  }
}

// var arr = [2,4,6,7,10,11]
// console.log(secondLast(arr))

// 4. Double Vision - Given an array (similar to saying 'takes in an array'),
//    create a function that returns a new array where each value in the original array has been doubled.
//    Calling double([1,2,3]) should return [2,4,6] without changing the original array.

// sudo code
// 1. function: doubleArr()
// 2. declare variable newArr = []
// 3. Multiply every element by 2 using for loop
// 4. return newArr

function doubleArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

// var arr = [1,2,3]
// console.log(doubleArr(arr));

// 4. Count Positives - Given an array of numbers, create a function to replace the last value
//    with the number of positive values found in the array.
//    Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

// sudo code
// 1. create function countP()
// 2. declare variable "sum"
// 3. create a for loop

function countP(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum++;
    }
  }

  arr[arr.length - 1] = sum;

  return arr;
}

// var r = [-1,1,1,1];
// console.log(countP(r));

// var arr = [1,2,3,4]
// var sum = 0

// arr.forEach(ele=>{
//     sum += ele
// })

// var avg = sum / arr.length

// console.log(avg)

// 6. Evens and Odds - Create a function that accepts an array.
// Every time that array has three odd values in a row, print "That's odd!".
// Every time the array has three evens in a row, print "Even more so!".

// sudo code
// 1. function trio()
// 2. create for loop
// 3. consecutive elements from the beginning
// 4. If the three consecutive elements are all odd or even, I will have my computer say something

function trio(arr) {
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 1) {
      console.log("That's odd!");
    } else if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
      console.log("Even more so!");
    }
  }
}

// var j = [2,1,1,1,3,5,6,8,8,8,9,10,12,14]; //
// trio(j);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd
// (arr[1], arr[3], arr[5], etc). Afterward, console.log each array value and return arr.

// sudo code
// 1. arr = [1,2,3,4,5,6] it wants us to add 1 to every odd position of the given array.
// 2. function oddArr()
// 3. create a variable "index"
// 4. we need to use modulo on every interation of the for loop
// 5. if it is odd we are going to add 1 to the value of the index num
// 6. console.log each array value and return arr

function oddArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      arr[i] += 1;
      console.log(arr[i]);
    }
  }
  return arr;
}

var c = [1, 3, 5, 2, 4, 6];
console.log(oddArr(c));
