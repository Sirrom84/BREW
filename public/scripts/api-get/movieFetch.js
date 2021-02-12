$(document).ready(function () {

  $('.result.container').hide();
  $(".search-form").submit(function () {
    $('.popup').show();


    $('.close').click(function() {
      $('.popup').hide();
    });

    let search = $("#search").val();

    $.get(`http://www.omdbapi.com/?apikey=21bcaad3&t=${search}`,
      function (response) {
        console.log("HERE IS THE RESPONSE",response );

        let title = $(`<h3 class="search-title">${response.Title}</h3>`);

        let img = $( `<img class="books-img"<br><a href=${response.Poster}><button id="imagebutton" class="btn red aligning">Add TODO</button></a>`);

        img.attr("src", response.Poster);

        title.appendTo("#result");

        img.appendTo("#result");
      }
    );

    return false; //prevent the form from auto submitting

  });
});
