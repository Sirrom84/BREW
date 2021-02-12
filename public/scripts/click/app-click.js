$(() => {
  // lists buttons

  $("h2.book").click(() => {
    if ($(".book-items").is(":visible")) {
      //full list
      $(".book-items").slideUp(); // closing
    } else {
      $(".book-items").slideDown();
      $(".movie-items").slideUp();
      $(".product-items").slideUp();
      $(".food-items").slideUp();
    }
  });

  $("h2.eat").click(() => {
    if ($(".food-items").is(":visible")) {
      $(".food-items").slideUp();
    } else {
      $(".food-items").slideDown();
      $(".movie-items").slideUp();
      $(".product-items").slideUp();
      $(".book-items").slideUp();
    }
  });

  $("h2.buy").click(() => {
    if ($(".product-items").is(":visible")) {
      $(".product-items").slideUp();
    } else {
      $(".product-items").slideDown();
      $(".movie-items").slideUp();
      $(".food-items").slideUp();
      $(".book-items").slideUp();
    }
  });

  $('h2.watch').click(() => {
    if ($('.movie-items').is(":visible")) {
      $('.movie-items').slideUp();
    } else {
      $('.movie-items').slideDown();
      $(".product-items").slideUp();
      $(".food-items").slideUp();
      $(".book-items").slideUp();
    }
  });

});
