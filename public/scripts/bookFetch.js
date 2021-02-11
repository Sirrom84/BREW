$(document).ready(function () {
  $('.popup, .result.container').hide();

  $("#myform").submit(function () {
    $('.popup').show();
    $('nav').click(function(){
      $('.popup').hide();
    });
    $('.close').click(function(){
      $('.popup').hide();
    })
    let search = $("#book-search").val();

    if (search === "") {
      alert("Please enter something in the field");
    } else {
      let url = "";
      let img = "";
      let title = "";
      let author = "";

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "+intitle", function (response) {
        console.log('HERES MY LOG FOR THE RESPONSE:', response.items);

        for (let i = 0; i < response.items.length; i++) {
          img = $('<img class="books-img" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button class="imagebutton">Visit Google Books</button></a><br><button class="add-button">Add</button>');
          title = $('<h3 class="search-title">' + response.items[i].volumeInfo.title + '</h3>');
          author = $('<address class="search-author"> By: ' + response.items[i].volumeInfo.authors + '</address><hr>');
          url = response.items[i].volumeInfo.imageLinks.thumbnail;
          img.attr('src', url);
          img.appendTo('#result');
          title.appendTo('#result');
          author.appendTo('#result');
        }
      });

    }

    return false;
  });


});
