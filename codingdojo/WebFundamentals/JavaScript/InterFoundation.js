// ************* I had to work with someone to come up with the code below, and was Agro'd out that I skipped the last one. ***************** //

// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
// Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
var sum = 0;
for (var i = 0; i <= num; i++) {
sum += i;
}
console.log(sum);
return sum;
}
sigma(5);
sigma(10);// Results: 15 & 55

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
// For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function fact(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
    product *= i;
}
    return product;
}
console.log(fact(3)); // 6
console.log(fact(5)); //120


// Fibonacci - Create a function to generate Fibonacci numbers.
// In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.
// Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),

function fibonacci(n) {
    var a = 0,
    b = 1,
    sum = 1;
    
    for (var i = 2; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
}
return sum;
}
console.log(fibonacci(16)); //987
console.log(fibonacci(27)); //196418
console.log(fibonacci(81)); //37889062373143900
console.log(fibonacci(91)); //4660046610375530000
console.log(fibonacci(100)); //354224848179262000000

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function SecToLast(arr) {
    if (arr.length < 2) {
    return null; 
} else { 
    return arr[arr.length - 2];
}
}
console.log(SecToLast([42, true, 4, "Liam", 7])); //Liam
console.log(SecToLast([4])); //null

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr, n) {
    if (arr.length < n) {return null;
    } else {
        return arr[arr.length - n];
    }
}
console.log(nthToLast([1, 3], 3)); //null
console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3)); //4

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

var secondLg = function () {
  var arr = [42, 1, 4, 3.14, 7];
  var max = Math.max.apply(null, arr); //apply accepts an array and it applies the array as parameters to the actual function
  arr.splice(arr.indexOf(max), 1);
// IndexOf: Returns the index of the first occurrence of a value in an array. Splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  return Math.max.apply(null, arr); //Returns the value.
};
console.log(secondLg());

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
