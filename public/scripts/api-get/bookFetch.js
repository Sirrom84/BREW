$(() => {

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $('.result.container').hide();

  $(".search-form").submit(() => {

    let userSearch = $("#search").val();

      if (!userSearch) {
      $(".error").show();
      $('.books-items').empty();
    }

    if (userSearch[0] === "R" || userSearch[0] === "r") {
      $(".error").hide();
      $('.popup').show();

      $('.close').click(() => {
        $('.popup').hide();
      });

      let textEntry = userSearch.split(" ");
      const textArr = textEntry.shift();
      const search = textEntry.join(" ");

      // console.log("This is my book search:", search);

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "+intitle", response => {
          // console.log('HERES MY LOG FOR THE RESPONSE:', response.items);

          for (let i = 0; i < response.items.length; i++) {
            let img = $(`<img class="books-img" id="dynamic"><br>
            <a href=` + response.items[i].volumeInfo.infoLink + '><button class="imagebutton">Visit Google Books</button></a><br><button class="add-button">Add</button>');
            let title = $(`<h3 class="search-title" data-title="${response.items[i].volumeInfo.title}">` + response.items[i].volumeInfo.title + '</h3>');
            let author = $('<address class="search-author"> By: ' + response.items[i].volumeInfo.authors + '</address><hr>');

            let url = response.items[i].volumeInfo.imageLinks.thumbnail;

            img.attr('src', url);
            img.appendTo('#result');
            title.appendTo('#result');
            author.appendTo('#result');
          }

          // create new item
          $('.add-button').click((event) => {
            const $book = $(event.target).next('h3.search-title');
            console.log( $book);
            const title = $book.attr('data-title')
            console.log("This is the title", title)

            const data = {
              name: title
            };

            // console.log("This is the img from add button", data)

            $.post(`/books/${userId}/new`, data)
              .then(() => {
                console.log("New Items Created")
                loadBooks();
                $("#search").val(' ');
                location.reload();
              })
              .catch(err => {
                console.log(err)
              })
          })
        });

      return false;
    }
  });

});
