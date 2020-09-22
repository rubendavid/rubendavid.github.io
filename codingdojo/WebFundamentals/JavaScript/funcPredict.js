function greeting() {
    return "Hello";
    console.log("World");
}
    var word = greeting();
    console.log(word)

//Hello

function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("Num1 is: " + num1);
    console.log("Num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3, 5);
var result2 = add(4, 7);

console.log(result1);
console.log(result2);

// Summing Numbers!
// Num1 is: 3
// Num2 is: 5
// Summing Numbers!
// Num1 is: 4
// Num2 is: 7
// 8
// 11

var num = 9;

function highFive(num) {
for (var i = 0; i < num; i++) {
    if (i == 5) {
    console.log("High Five!");
    }
    console.log(i);
}
}
// It retuns nothing, but if decalre a value and call the function the code works.
highFive(num);

// 0
// 1
// 2
// 3
// 4
// High Five!
// 5
// 6
// 7
// 8
