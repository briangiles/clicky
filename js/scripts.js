jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!")
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});

/*
$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!")
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
*/
