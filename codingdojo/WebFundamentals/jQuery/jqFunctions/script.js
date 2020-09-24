$(function () {
$("#accordion").accordion();
$("#datepicker").datepicker();

$("a").click(function () {
alert("Check out my Alert!");
});

$("#hide").click(function () {
$("p").hide();
});

$("#show").click(function () {
$("p").show();
});

$("h3").hover(function () {
$("h2").text("Something is not right");
});

$(".append").click(function () {
$(".result").append("<h2>Hello</h2>");
});

$("button").click(function () {
$("button").css("background-color", "yellow");
$("button").css("width", "500px");
$("button").css("background-color", "yellow");
});
$("#fa-in").click(function () {
$("#fin").fadeIn(3000, function () {
    $("span").fadeIn(100);
    });
});


// console.log($)
for (var i = 0; i <= 1000; i++) {
$("#wrapper").append('<div class="box"></div>');
$(this).css("height", randomHeight() + "px");
}

function getRandomColor() {
var letters = "0123456789ABCDEF";
var color = "#";
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
function randomWidth() {
var random_number = Math.random() * 150;
return random_number;
}
function randomHeight() {
var random_number = Math.random() * 100;
return random_number;
}
$(".box").hover(function () {
$(this).css("background-color", getRandomColor());
$(this).css("width", randomWidth() + "px");
$(this).css("height", randomHeight() + "px");
});
});
