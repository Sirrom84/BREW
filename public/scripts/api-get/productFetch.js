$(document).ready(function () {

  $('.popup, .result.container').hide();

  $("#myform").submit(function () {

    $('.popup').show();

    $('nav').click(function() {

      $('.popup').hide();

    });

    $('.close').click(function() {

      $('.popup').hide();

    });

    // let search = $("#book-search").val();


  $.get("/products/buy", function (response) {

        //only showing 1 item also need to make the search dynamic
        for (let product of response) {
          console.log('HERE',product.price);
          let img = $('<img class="books-img" id="dynamic"><br><a href=' + product.image + '><button class="imagebutton">Visit Google Books</button></a><br><button class="add-button">Add</button>');
          let title = $('<h3 class="search-title">' + product.title + '</h3>');
          img.attr('src', product.image);
          img.appendTo('#result');
          title.appendTo('#result');
          author.appendTo('#result');
        }
      });



    return false;
  });


});
