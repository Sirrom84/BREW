$(document).ready(function () {
  $('.popup, .result.container').hide();

  $("#myform").submit(function () {
    $('.popup').show();
    $('.main').click(function(){
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

          title = $('<h3 class="center-align white-text search-title">' + response.items[i].volumeInfo.title + '</h3>');
          author = $('<h3 class="center-align white-text search-author"> By: ' + response.items[i].volumeInfo.authors + '</h3>');
          img = $('<img class="aligning" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">get info</button></a><hr>');
          url = response.items[i].volumeInfo.imageLinks.thumbnail;
          img.attr('src', url);
          title.appendTo('#result');
          author.appendTo('#result');
          img.appendTo('#result');
        }
      });

    }

    return false;
  });


});
