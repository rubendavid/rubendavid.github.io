var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;
var newArr = [];

for (var i = 0; i < testArr.length; i++) {
  // console.log("Num: " + testArr[i])
    sum += testArr[i];
    console.log("Num: " + testArr[i] + ", Sum: " + sum);

  newArr.push(testArr[i] * i);
}
console.log(newArr);

//=======console.log======
Num: 6, Sum: 6
Num: 3, Sum: 9
Num: 5, Sum: 14
Num: 1, Sum: 15
Num: 2, Sum: 17
Num: 4, Sum: 21
[ 0, 3, 10, 3, 8, 20 ]