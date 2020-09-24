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

$( "#btn" ).click(function() {
$( "#btnIn" ).fadeIn("fast", function() {
});
return false;
});
$("#btnF").click(function () {
$("#btnIn").fadeOut("fast", function () {});
return false;
});
$(document.body).click(function () {
if ($("#slideU").first().is(":hidden")) {
    $("#slideU").show("slow");
} else {
    $("#slideU").slideUp();
}
});
$(document.body).click(function () {
if ($("#slideD").first().is(":hidden")) {
    $("#slideD").show("slow");
} else {
    $("#slideD").slideDown();
}
});
$("#tog").click(function () {
$("#togg").toggle();
});
$("#slitog").click(function () {
$("#slitogg").slideToggle("slow");
});
$("#before").before($("b"));
$("#after").after($("#bafter"));

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
