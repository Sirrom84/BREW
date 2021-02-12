$(() => {
  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  // 1. when you click the edit button for a specific item
  $(document).on("click", ".edit", function(event) {
    $('.bubble').slideDown();

    //this is data of the item on edit them
    const $itemToEdit = $(event.target).parents('table.item');
    const data = { itemId: $itemToEdit.attr('data-itemId') };

    const sendPost = (list, empty, data, callback) => {
      $.post(`/${list}/${userId}/edit`, data)
        .then(() => {
          $itemToEdit.remove();
          $(`.${empty}-items`).empty();
          callback();
        })
        .catch(err => {
          console.log(err)
        })
    }

    // if reading clicked , delete the item from original table


    $(".reading").click((e) => {
      $('.bubble').slideUp();
      const $newList = $(e.target).parents('article');
      data["categoryId"] = $newList.attr('data-type');
      sendPost("books", "books", data, loadBooks);
      })


      // if eating clicked
      $(".eating").click((e) => {

        $('.bubble').slideUp();
        const $eat = $(e.target).parents('article');
        data["categoryId"] = $eat.attr('data-type');
        sendPost("restaurants", "foods", data, loadRestaurants);
        })

         // if eating clicked
      $(".watching").click((e) => {

        $('.bubble').slideUp();
        const $eat = $(e.target).parents('article');
        data["categoryId"] = $eat.attr('data-type');
        sendPost("movies","movies",  data, loadMovies);
        })

         // if eating clicked
      $(".buying").click((e) => {

        $('.bubble').slideUp();
        const $eat = $(e.target).parents('article');
        data["categoryId"] = $eat.attr('data-type');
        sendPost("products", "products", data, loadProducts);
        })


    })


  });
