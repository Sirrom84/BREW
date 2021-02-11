$(() => {
  //fetching BOOKS information from the db (currently for user_id: 1)

  const userURL = window.location.pathname;
  const userId = userURL[1];

  $(function () {
    $.ajax({
      method: "GET",
      url: `/books/${userId}`,
    }).then((result) => {});
  });

  //fetching MOVIES information from the db
  $(function () {
    $.ajax({
      method: "GET",
      url: `/movies/${userId}`,
    })
      .then((result) => {
        renderBookList(result.movies);
      })
      .catch((err) => {
        console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
      });
  });

  //To display items in a list
  $(".reading-button").click(function (event) {
    if ($(".all-items").is(":visible")) {
      $(".all-items").slideUp();
    } else {
      $(".all-items").slideDown();
    }
  });

  // function to render items
  function renderBookList(items) {
    // $('.all-items').empty();
    for (item of items) {
      generateNewElement(item);
    }
  }

  // function to create new items and push them into the list
  const generateNewElement = function (obj) {
    const title = obj.title;
    const dateAdded = obj.date_added;
    const author = obj.author;

    const $markup = `
    <table class="item">
    <tbody>
        <tr>
            <td><input type="checkbox" name="" value=""></td>
            <td class="title-td"><b>${title}</b></td>
            <td class="author-td">${author}</td>
            <td class="date-td">Added on: ${dateAdded}</td>
        </tr>
    </tbody>
    <table>
    `;

    const $item = $(".all-items").prepend($markup);
    console.log("THIS IS THE ITEM from generate new element:", $item);
    return $item;
  };
});
