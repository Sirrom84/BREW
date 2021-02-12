$(() => {
  $(".result.container").hide();
  $(".search-form").submit(function () {
    $(".popup").show();

    $(".close").click(function () {
      $(".popup").hide();
    });

    // let search = $("#book-search").val();

    let search = $("#book-search").val();

    $.get(`restaurants/yelp/${search}`, function (response) {
      console.log(" THIS IT HE ERROR")
      let result = JSON.parse(response);
      for (let item of result) {

        let name = $(`<h3 class="search-title">${item["name"]}</h3><br><button class="add-button">Add</button>`);
        console.log("this is city", item.location.city)
        console.log("this is city2", item["location"]["city"])
        console.log("this is the address", item.location.display_address[0,1])
        // let city = $(`<h3 class="search-title">${item.location.city}</h3><br><button class="add-button">Add</button>`);
        // let address = $(`<h3 class="search-title">${item.location.display_address[0,1]}</h3><br><button class="add-button">Add</button>`);
        name.appendTo("#result");
        // city.appendTo("#result");
        // address.appendTo("#result");
      }
    });
    return false;
  });
});
