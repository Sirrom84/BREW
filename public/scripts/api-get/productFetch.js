$(() => {

  $('.result.container').hide();

  $(".search-form").submit( event => {

  event.preventDefault()

  $('.popup').show();

  $('.close').click(function() {
      $('.popup').hide();
  });

  let search = $("#search").val();

  $.get(`/products/buy/${search}`,  response => {
      //lets just give back 10 options//
    response.slice(0,10).forEach(element => {

    let img = $( `<img class="aligning card z-depth-5" id="dynamic"><br><a href="${element.image}"><button id="imagebutton" class="add-button">Add</button></a>`);
    let title = $(`<h3 class="search-title">${element.title}</h3>`);
    img.attr('src', element.image);
    img.appendTo('#result');
    title.appendTo('#result');

  });
});

return false; //prevent the form from auto submitting

  });
});

