$(document).ready(function () {

  $("#myform").submit(function () {
    let search = $("#book-search").val();
    $('.popup').addClass("active");

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

          title = $('<h5 class="center-align white-text">' + response.items[i].volumeInfo.title + '</h5>');
          author = $('<h5 class="center-align white-text"> By:' + response.items[i].volumeInfo.authors + '</h5>');
          img = $('<img class="aligning card z-depth-5" id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">get info</button></a>');
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
