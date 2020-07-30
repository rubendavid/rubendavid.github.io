var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "Blue"


console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName); 

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is : " + company[stockPropName]);


// Object literal //
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"
	},
	"stock of company": 110
};
console.log(facebook.ceo.favColor);


// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);


// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);



function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

// Arrays
var array = new Array();
array[0] = "Ruben";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

var myObj = {
  name: "Yaakov",
  course: "HTML/CSS/JS",
  platform: "Courera"
};
for (var prop in myObj) {
  console.log(prop + ": " + myObj[prop]);
}

// Short hand array creation
var names = ["Ruben", "Wilma", "Christian", "Andreis", "Isabella"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}


var names2 = ["Ruben", "Wilma", "Christian", "Andreis", "Isabella"];
for (var name in names2) {
  console.log("Hello " + names2[name]);
}
names2.greeting = "Hi!";
for (var name in names2) {
  console.log("Hello " + names2[name]);
}

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);

1  (function(window) {
2 
3  var obj = {};
4
5  obj.dreamOn = function () {
6   console.log("I want to see the global scope! Let me out!");
7  };
8
9  window.doer = obj;
10 
11 });
12
13 doer.dreamOn();

// Closures
function makeMultiplier (multiplier) {
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();


  return (
      function (x) {
        return multiplier * x;
      }

    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env