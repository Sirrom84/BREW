$(() => {
  // lists buttons

  $("h2.book").click(() => {
    if ($(".books-items").is(":visible")) {
      //full list
      $(".books-items").slideUp(); // closing
    } else {
      $(".books-items").slideDown();
      $(".movies-items").slideUp();
      $(".products-items").slideUp();
      $(".foods-items").slideUp();
    }
  });

  $("h2.eat").click(() => {
    if ($(".foods-items").is(":visible")) {
      $(".foods-items").slideUp();
    } else {
      $(".foods-items").slideDown();
      $(".movies-items").slideUp();
      $(".products-items").slideUp();
      $(".books-items").slideUp();
    }
  });

  $("h2.buy").click(() => {
    if ($(".products-items").is(":visible")) {
      $(".products-items").slideUp();
    } else {
      $(".products-items").slideDown();
      $(".movies-items").slideUp();
      $(".foods-items").slideUp();
      $(".books-items").slideUp();
    }
  });

  $('h2.watch').click(() => {
    if ($('.movies-items').is(":visible")) {
      $('.movies-items').slideUp();
    } else {
      $('.movies-items').slideDown();
      $(".products-items").slideUp();
      $(".foods-items").slideUp();
      $(".books-items").slideUp();
    }
  });

});
