document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

(function ($) {
  $(function () {
    $(".dropdown-trigger").dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: true, // Displays dropdown below the button
      alignment: "right", // Displays dropdown with edge aligned to the left of button
    });
  }); // End Document Ready
})(jQuery); // End of jQuery name space

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, options);
});
