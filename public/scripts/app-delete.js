$(() => {

  $(document).on("click", ".delete", function(event) {
    const userURL = window.location.pathname;
    const userId = userURL.slice(1);

    const $item = $(event.target).parents('table.item');
    const data = {
      category: $item.attr('data-type'),
      itemId: $item.attr('data-itemId')
    }


    //post request to movies
    $.post(`/movies/${userId}/delete`, data)
    .then(() => {
      $item.remove();

      const movieCount = $('.movie-items table.item').length;
      $('.movie-counter').text(movieCount + " SHOWS & MOVIES");
      $('.watching').click(() => {
      if (!movieCount) {
        $('.movie-counter').effect( "shake" , {times: 3, distance: 10} , 300);
    }})
  })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
    })

  //post request to books
  $.post(`/books/${userId}/delete`, data)
    .then(() => {
      $item.remove();

      const bookCount = $(".book-items table.item").length;
      $(".reading").click(() => {
        if (!bookCount) {
          $(".book-counter").effect("shake", { times: 3, distance: 10 }, 300);
        }
      });

      if (bookCount === 1) {
        $(".book-counter").text(bookCount + " BOOK");
      } else {
        $(".book-counter").text(bookCount + " BOOKS");
      }
  })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
    })
  });
});
