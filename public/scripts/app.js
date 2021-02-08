$(() => {

$(function () {
  $.ajax({
    method: "GET",
    url: "/books"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

})

  // 1. function to create items
  // 2. function to render the items
  // 3. function to load the items



//STOPPING HERE FOR NOW THINGS ARE LOOKING GOOD!
  $('.reading-button').click(function (event) {
    if ($('.all-items').is(":visible")) {
      $('.all-items').slideUp();
    } else {
      $('.all-items').slideDown();
    }
  });

  // button to display items

  const obj = {
    "title": "sherk",
    "date_added": "2019-02-03"
  }

  const generateNewElement = function(obj) {
    const title = obj.title;
    const dateAdded = obj.date_added;

    const $markup = `
    <article class="item">
      <header>
        <h1>${title}</h1>
      </header>

      <footer>
        <h6>${dateAdded}</h6>
      </footer>
  </article>
    `;

    const $item = $('.all-items').prepend($markup);
    console.log("NEW ITEM ADDED:", $item)
    return $item;
  };

generateNewElement(obj);


});




