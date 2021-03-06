// Print odds 1-20
// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// set up a loop that starts at 1
// make sure the loop stops at 20
// make sure we go up by 1 each time
// every loop, check if the current loop number is odd
// if it is odd, print that number to the console

// WRITE THE CODE!

// Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

// I need to add up all numbers from 1 to 5
// so, 1 + 2 + 3 + 4 + 5
// I need to remember the sum somehow (variable)
// Set up a loop starting at 1
// Make sure the loop gets to 5
// Go up by one number each time
// What to do every loop:
// - take the current loop number and add it to sum
// - log the current loop number to the console
// - log the sum to the console

// WRITE THE CODE!

// part 1: variable to start loop at a certain number
// part 2: looping condition, when to stop, why to loop, etc
// part 3: step, how many to go up each loop
// (  part 1  ; part 2 ; part 3 )

for (var i = 0; i < 21; i++) {
    if(i % 2 != 0){
        console.log(i);
    }
}

var sum = 0;

for (var i = 1; i < 6; i++) {
    sum = sum + i;
    console.log("Num: " + i);
    console.log("Sum: " + sum);
}

for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        i += 2;
    }
    else if (i % 3 == 0) {
        i++;
    }
    console.log(i);
}

// Predict 1: 

var arr = [8, 6, 7, 5, 3, 0, 9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 8
// 6
// 7
// 5
// 3
// 0
// 9


// // Predict 2:

var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}
// That is odd!
// That is odd!
// 8
// 4
// 2
// 0
// That is odd!

// // Predict 3:

var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if (arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);