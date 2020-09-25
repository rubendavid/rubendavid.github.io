$("img").click(function () {
  $(this).fadeOut(2000);
});

$("button").click(function () {
  $("img:hidden").fadeIn(2000);
});
