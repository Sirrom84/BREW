$(() => {

  $('.result.container').hide();

  $(".search-form").submit(function (event) {
  event.preventDefault()

    $('.popup').show();

    $('.close').click(function() {
      $('.popup').hide();
    });

    let search = $("#book-search").val();

    $.get(`/products/buy/${search}`, function (response) {
      //lets just give back 10 options//
      response.slice(0,10).forEach(element => {

          let img = $( `<img class="aligning card z-depth-5" id="dynamic"><br><a href="${element.image}"><button id="imagebutton" class="btn red aligning">Add TODO</button></a>`);
          let title = $(`<h3 class="search-title">${element.title}</h3>`);
          img.attr('src', element.image);
          img.appendTo('#result');
          title.appendTo('#result');

      });


     });

  return false; //prevent the form from auto submitting

  });
});

