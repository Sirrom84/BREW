$(() => {

  //-- Plugin for dayjs ---//
  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

$(function()  {
  $.ajax({
    method: "GET",
    url: `/movies/${userId}`
  })
  .then((result) => {
    renderList(result.movies);

    //counter
    const movieCount = $('.movie-items table.item').length;
    $('.movie-counter').text(movieCount + " SHOWS & MOVIES");
    $('.watching').click(() => {
      if (!movieCount) {
        $('.movie-counter').effect( "shake" , {times: 3, distance: 10} , 300);
      }
    });

  })
  .catch((err) => {
    console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
  })
});

// button to display items in a list
$('.movie-button').click(() => {
  if ($('.movie-items').is(":visible")) {
    $('.movie-items').slideUp();
  } else {
    $('.movie-items').slideDown();
  }
});

  // function to render items
  const renderList = (items) => {
    // $('.all-items').empty();
    for (item of items) {
      generateNewElement(item);
    }
  };

  // function to create new items and push them into the list
  const generateNewElement = (obj) => {
    const title = obj.title;
    const date = new Date(obj.date_added).toISOString();
    const dateAdded = dayjs(date).fromNow();
    const author = obj.author;

    const $markup = `
    <table class="item">
    <tbody>
        <tr>
            <td><input type="checkbox" name="" value=""></td>
            <td class="title-td"><b>${title}</b></td>
            <td class="date-td">Added: ${dateAdded}</td>
        </tr>
    </tbody>
    <table>
    `;

    const $item = $('.movie-items').prepend($markup);
    console.log("THIS IS THE ITEM from generate new element:", $item)
    return $item;
  }
});

