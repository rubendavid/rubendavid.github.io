var users = [
    { name: "Michael", age: 37 },
    { name: "John", age: 30 },
    { name: "David", age: 27 },
];
console.log(users[0].name, "- " + users[0].age); // Michael - 37;
console.log(users[1].name, "- " + users[1].age); // John - 30;
console.log(users[2].name, "- " + users[2].age); //David - 27;

console.log(document.getElementsByTagName("h1"));
var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
body.innerHTML = "Hello World";

var bod = document.body;
for (var i = 0; i < 10; i++) {
    bod.innerHTML +=
    "<p>This has gone through the loop completely: " + i + " times</p>";
}
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].addEventListener);
    paragraphs[i].addEventListener("click", function () {
    this.style.background = "blue";
    });
}

