$(() => {

  $(".result.container").hide();

  $(".search-form").submit(function () {

    $(".popup").show();

    $(".close").click(function () {

      $(".popup").hide();

    });

    let search = $("#search").val();

$.get(`restaurants/yelp/${search}`, response => {

  let result = JSON.parse(response);

  console.log("HERES THE RESULT",result);

  for (let item of result) {

    let img = $(`<img class="yelp-image" src='${item.image}'><br>`)

    let name = $(`<h3 class="search-title">${item["name"]}</h3><br><h3 class='rating'>Yelp Rating: ${item.rating}</h3>`);

    let address = $(`<h3 class="search-title">${item.Address}</h3><br><button class="add-button add-button">Add</button><br>`);

        // console.log("this is city", item.location.city)
        // console.log("this is city2", item["location"]["city"])
        // console.log("this is the address", item.location.display_address[0,1])
        // let address = $(`<h3 class="search-title">${item.location.display_address[0,1]}</h3><br><button class="add-button">Add</button>`);
        img.appendTo('#result');
        name.appendTo("#result");
        address.appendTo('#result');
        // city.appendTo("#result");
        // address.appendTo("#result");
      }
    });
    return false;
  });
});




// //: {name: "Sawasdee Thai Restaurant", Address: "Vancouver, BC V5V 3P9", Phone: "+1 604-876-4030"}
// 1: {name: "Unchai Thai Restaurant", Address: "Vancouver, BC V6J 3J2", Phone: "+1 604-559-6484"}
// 2: {name: "Maenam", Address: "Vancouver, BC V6J 1M5", Phone: "+1 604-730-5579"}
// 3: {name: "Bai Bua Thai Cuisine", Address: "Vancouver, BC V5C 0C2", Phone: "+1 778-379-9699"}
// 4: {name: "Kin Kao Thai Kitchen", Address: "Vancouver, BC V5L", Phone: "+1 604-558-1125"}
// 5: {name: "Bob Pochana", Address: "Vancouver, BC V6G 1C7", Phone: "+1 604-423-3274"}
// 6: {name: "Taste of Thai", Address: "Vancouver, BC V6R 3R8", Phone: "+1 604-568-8668"}
// 7: {name: "Bangkok City Cafe", Address: "Suite 2", Phone: "+1 604-736-5474"}
// 8: {name: "Salathai Thai Restaurant", Address: "Vancouver, BC V6Z 1X9", Phone: "+1 604-683-7999"}
// 9: {name: "Thai Basil", Address: "Vancouver, BC V6E 1X4", Phone: "+1 604-685-6754"}//
