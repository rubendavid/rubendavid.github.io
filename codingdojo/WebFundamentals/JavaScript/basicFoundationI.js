// #1 - Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

// function counter(){
//     var arr = []
//     for (i = 1; i <= 255; i++) {
//         arr.push(i);
//     }
//     console.log(arr)
//     return;
// }                                          

// counter();

// [
//    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
//   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
//   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
//   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
//   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
//   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
//   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
//   97, 98, 99, 100,
//   ... 155 more items
// ]

// #2 - Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.

// function sumEvens1to1000(){
//     var sum = 0
//     for (var i = 1; i <= 1000; i++) {
//         if (i % 2 == 0){
//             sum += i
//         }
//     }
//     return sum
// }
// var sum = sumEvens1to1000();
// console.log(sum);

// 250500

//#3 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

// function sumOdds1to1000(){
//     var sum = 0

//     for (var i = 1; i <= 5000; i++) {
//         if (i % 2 == 1){
//             sum += i
//         }
//     }
//     return sum
// }
// var sum = sumOdds1to1000();
// console.log(sum);

// 6250000

//#4 - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function sumOfArr(arr){
//     var sum = 0
//     for (var i =0; i < arr.length; i++)
//     sum += arr[i]
//     return sum;
// }

// var newArr = [1,2,5]
// var answer = sumOfArr(newArr)
// console.log(answer)

// 8;

// #5 - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// function maxValue(arr) {
//     var maxNum = arr[0]

//     for(var i=1; i < arr.length; i++) {
//         if (maxNum < arr[i]){
//             maxNum = arr[i];
//         }
//     }
//     return maxNum
// }
// var newArr = [1,2,5]
// var answer = maxValue(newArr);
// console.log(answer)

// 5;


// #6 - [1,3,5,7,20]


// function findAvg(arr) {
//     var avg;
//     for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     }
//     var avg = sum / arr.length;
//     return avg;
// }
// var arr = [1,3,5,7,20]
// console.log(findAvg(arr))

//7.2

// #7 - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// function arrayOdd(arr) {
//     var oddArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//         oddArr.push(arr[i]);
//         }
//     }

//     return oddArr;
//     }

//     var arr = [];
//     for (var i = 1; i <= 50; i++) {
//     arr.push(i);
// }
// console.log(arrayOdd(arr));
// [
// 1,
// 3,
// 5,
// 7,
// 9,
// 11,
// 13,
// 15,
// 17,
// 19,
// 21,
// 23,
// 25,
// 27,
// 29,
// 31,
// 33,
// 35,
// 37,
// 39,
// 41,
// 43,
// 45,
// 47,
// 49,
// ];