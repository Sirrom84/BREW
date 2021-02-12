$(() => {

  $(".result.container").hide();

  $(".search-form").submit(function () {
    let userSearch = $("#search").val();

    if (userSearch[0] === "E" || userSearch[0] == "e") {
      $(".error").hide();
      $('.popup').show();

      $('.close').click(() => {
        $('.popup').hide();
      });

      let textEntry = userSearch.split(" ");
      const textArr = textEntry.shift();
      const search = textEntry.join(" ");
      console.log(" This is my actual submisions", search)

    $.get(`restaurants/yelp/${search}`, response => {
      let result = JSON.parse(response);

      for (let item of result) {
        let img = $(`<img class="yelp-image" src='${item.image}'><br><button class="add-button add-button">Add</button>`)
        let name = $(`<h3 class="search-title" data-title="${item.name}">${item.name}</h3><h3 class='rating'>Yelp Rating: ${item.rating}</h3>`);
        let address = $(`<h3>${item.Address}</h3><<br><hr>`);

        img.appendTo('#result');
        name.appendTo("#result");
        address.appendTo('#result');

          }

        // create new item
        $('.add-button').click((event) => {
          const $res = $(event.target).next('h3.search-title');
          console.log($res);
          const title = $res.attr('data-title')
          console.log("This is the title", title)

          const data = {
            name: title
          };

          // console.log("This is the img from add button", data)

          $.post(`/restaurants/${userId}/new`, data)
            .then(() => {
              console.log("New Items Created")
              loadRestaurants();
              $("#search").val(' ');
              location.reload();
            })
            .catch(err => {
              console.log(err)
            })
        })


    });
    return false;
  }
  });
});
