$(() => {

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  $('.result.container').hide();

  $(".search-form").submit(function (event) {
    event.preventDefault();

  $('.popup').show();

    $('.close').click(() => {
      $('.popup').hide();
  });

    let userSearch = $("#search").val();

    if (userSearch[0] === "B" || userSearch[0] === "b") {

      let textEntry = userSearch.split(" ");
      const textArr = textEntry.shift();
      const search = textEntry.join(" ");
      console.log("This is my movie search:", search);

    $.get(`/products/buy/${search}`, function (response) {

      console.log("This is the response:", response)
      response.slice(0,10).forEach(element => {

          let img = $( `<img class="aligning card z-depth-5" id="dynamic"><br><a href="${element.image}"><button class="imagebutton">Visit Amazon</button></a><button id="imagebutton" class="add-button">Add</button>`);
          let title = $(`<h3 class="search-title" data-title="${element.title}">${element.title}</h3>`);
          img.attr('src', element.image);
          img.appendTo('#result');
          title.appendTo('#result');
      });

      // create new item
      $('.add-button').click((event) => {

        const $product = $(event.target).next('h3.search-title');
        console.log( $product);
        const title = $product.attr('data-title');
        console.log("This is the title", title)

        const data = {
          name: title
        };

        // console.log("This is the img from add button", data)

        $.post(`/products/${userId}/new`, data)
          .then(() => {
            console.log("New Items Created")
            loadProducts();
            location.reload();
          })
          .catch(err => {
            console.log(err)
          })
      })
    });

  return false; //prevent the form from auto submitting
  };
  });
});

