$(document).ready(function () {


  $('.result.container').hide();
  $(".search-form").submit(function () {
    $('.popup').show();


    $('.close').click(function() {
      $('.popup').hide();
    });

    let search = $("#book-search").val();

    // let search = $("#book-search").val();

    $.get("/restaurants/yelp", function (response) {
       console.log(response)
      });



    return false;
  });


});
