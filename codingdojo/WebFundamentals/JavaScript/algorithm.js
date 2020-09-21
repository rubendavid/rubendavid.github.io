for (var i = 0; i < 21; i++) {
    if (i % 2 != 0) {
    console.log(i);
    }
}
1
3
5
7
9
11
13
15
17
19

var sum = 0;

for (var i = 1; i < 6; i++) {
    sum = sum + i;
    console.log("Num: " + i);
    console.log("Sum: " + sum);
}

for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
    i += 2;
    } else if (i % 3 == 0) {
    i++;
    }
console.log(i);
}
"Num: 1";
"Sum: 1";
"Num: 2";
"Sum: 3";
"Num: 3";
"Sum: 6";
"Num: 4";
"Sum: 10";
"Num: 5";
"Sum: 15";
3;
4;
7;
8;
11;
13;
14;
17;
19;
20;