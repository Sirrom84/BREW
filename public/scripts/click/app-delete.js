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
      console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
    })

  //post request to restaurants
  $.post(`/restaurants/${userId}/delete`, data)
    .then(() => {
      $item.remove();

      const resCount = $('.food-items table.item').length;
      $('.eating').click(() => {
        if (!resCount) {
          $('.food-counter').effect( "shake", {times: 3, distance: 10} , 300);
        }
      });

      if (resCount === 1) {
        $('.food-counter').text(resCount + " RESTAURANT");
      } else {
        $('.food-counter').text(resCount + " RESTAURANTS");
      }
  })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER RESTAURANTS", err);
    })

    //post request to products
  $.post(`/products/${userId}/delete`, data)
  .then(() => {
    $item.remove();

    //counter
    const itemCount = $(".product-items table.item").length;
    $(".buying").click(() => {
      if (!itemCount) {
        $(".product-counter").effect(
          "shake",
          { times: 3, distance: 10 },
          300
        );
      }
    });

    if (itemCount === 1) {
      $(".product-counter").text(itemCount + " ITEM");
    } else {
      $(".product-counter").text(itemCount + " ITEMS");
    }
})
  .catch((err) => {
    console.log("AJAX ERROR CAUGHT RENDER PRODUCTS", err);
  })
  });
});
