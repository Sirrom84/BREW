$(document).ready(function () {

  $("#myform").submit(function () {

    let search = $("#book-search").val();

    $(".popup").addClass("active");



    $.get(`http://www.omdbapi.com/?apikey=21bcaad3&t=${search}`,
      function (response) {
        console.log("HERES MY LOG FOR THE MOVIE FETCH:", response);

        let title = $(
          `<h5 class="center-align white-text">${response.Title}</h5>`
        );

        let img = $(
          `<img class="aligning card z-depth-5" id="dynamic"><br><a href=${response.Poster}><button id="imagebutton" class="btn red aligning">Add TODO</button></a>`
        );

        img.attr("src", response.Poster);

        title.appendTo("#result");

        img.appendTo("#result");
      }
    );

    return false; //prevent the form from auto submitting

  });
});
