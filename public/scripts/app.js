$(() => {

// function to load the items -- needs work
function loadBooks () {
  $.ajax({
    method: "GET",
    url: "/books"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
};

  // button to display items in a list
  $('.reading-button').click(function (event) {
    if ($('.all-items').is(":visible")) {
      $('.all-items').slideUp();
    } else {
      $('.all-items').slideDown();
    }
  });


  // function to render items
  // input: array of objects where each book is a book from the database
  // this function will take each object from the array and run the generateNewElement function, which will create a new items box for each object
  function renderBook(items) {
    $('.all-items').empty();

    for (item of items) {
      generateNewElement(item);
    }
  };


  // test code for generateNewElement function
  const obj = {
    "title": "shrek",
    "date_added": "April 1"
  }

  // function to create new items and push them into the list
  const generateNewElement = function(obj) {
    const title = obj.title;
    const dateAdded = obj.date_added;

    const $markup = `
    <article class="item">
        <h2>${title}</h2>
        <small>Added: ${dateAdded}</small>
  </article>
    `;

    const $item = $('.all-items').prepend($markup);
    return $item;
  };

  generateNewElement(obj)

});


