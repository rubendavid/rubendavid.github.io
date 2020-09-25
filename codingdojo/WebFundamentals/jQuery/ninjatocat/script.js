$(document).ready(function () {
  $("img").click(function () {
    var datasrc = $(this).attr("datasrc");
    $(this).attr({
      src: datasrc,
    });
  });
});
