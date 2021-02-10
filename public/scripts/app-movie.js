$(() => {

  //-- Plugin for dayjs ---//
  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

const getMovies = () => {
  $.ajax({
    method: "GET",
    url: `/movies/${userId}`
  })
  .then((result) => {
    renderList(result.movies);

     // counter
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
};

getMovies();

$(document).on("click", ".delete", function(event) {

  const $item = $(event.target).parent('table.item');
  const data = {
    category: $item.attr('data-type'),
    itemId: $item.attr('data-itemId')
  }
  console.log("THIS IS THE DATA:", data)

  $.post(`/movies/${userId}/delete`, data)
  .then((result) => {
    renderList(result.movies);
  })
  .catch((err) => {
    console.log("AJAX ERROR CAUGHT RENDER MOVIES", err);
  })
});

  // function to render items
  const renderList = (items) => {
    for (item of items) {
      generateNewElement(item);
    }
  };

  // function to create new items and push them into the list
  const generateNewElement = (obj) => {
    const title = obj.title;
    const userId = obj.user_id;
    const date = new Date(obj.date_added).toISOString();
    const dateAdded = dayjs(date).fromNow();
    const movieId = obj.id;

    const $markup = `
    <table class="item" data-type="movies" data-itemId="${movieId}">
    <div>
        <tr>
            <td class="check-td"><input type="checkbox"><td>
            <td class="title-td">
              <b>${title}</b>
              <div class="date-td">Added: ${dateAdded}</div>
              <td><form method="POST" action="/edit">
              <button type="submit" class="btn btn-outline-danger">Edit</button></form>
              </td>
              <td>
              <button class="btn btn-outline-danger delete">Delete</button>
              </td>
            </td>
        </tr>
    </div>
    <table>
    `;

    const $item = $('.movie-items').prepend($markup);
    return $item;
  }
});
