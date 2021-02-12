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

    $.get("/restaurants/yelp", function (response) {
        for (let i = 0; i < response.length; i++) {

        }
      });



    return false;
  });


});
