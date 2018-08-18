require('./scss/style.scss');

// require('./main.html.ejs');
// require("html-loader?interpolate!./main.html");

// require('./templates/index.pug');
console.log('doc ready');

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      console.log("ASDAASDas");
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
