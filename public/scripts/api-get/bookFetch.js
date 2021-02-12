$(document).ready(function () {

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $('.result.container').hide();

  $(".search-form").submit(function () {
    $('.popup').show();

    $('.close').click(() => {
      $('.popup').hide();
    });

    let search = $("#search").val();

    $.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "+intitle", function (response) {
        console.log('HERES MY LOG FOR THE RESPONSE:', response.items);

        for (let i = 0; i < response.items.length; i++) {

          let img = $('<img class="books-img" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button class="imagebutton">Visit Google Books</button></a><br><button class="add-button">Add</button>');
          let title = $('<h3 class="search-title">' + response.items[i].volumeInfo.title + '</h3>');
          let author = $('<address class="search-author"> By: ' + response.items[i].volumeInfo.authors + '</address><hr>');

          let url = response.items[i].volumeInfo.imageLinks.thumbnail;

          img.attr('src', url);
          img.appendTo('#result');
          title.appendTo('#result');
          author.appendTo('#result');
        }

        // create new item
        $('.add-button').click((event) => {

          const $addImg = $(event.target).siblings('img.books-img');
          // img: $addImg.attr('src')
          const data = {
            name: search
          };

          console.log("This is the img from add button", data)

          $.post(`/books/${userId}/new`, data)
            .then(() => {
              console.log("New Items Created")
              loadBooks();
            })
            .catch(err => {
              console.log(err)
            })
        })
      });


    return false;
  });
});
