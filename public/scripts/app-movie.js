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

const deleteMovie = () => {
  $.ajax({
    method: 'POST',
    url: `/movies/${userId}/delete`,
  }).then((result) => {
    renderList(result.movies);
})};



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
    const userId = obj.user_id;
    const date = new Date(obj.date_added).toISOString();
    const dateAdded = dayjs(date).fromNow();
    const bookId = obj.id;

    const $markup = `
    <table class="item">
    <div>
        <tr>
            <td class="check-td"><input type="checkbox"><td>
            <td class="title-td">
              <b>${title}</b>
              <div class="date-td">Added: ${dateAdded}</div>
              <td><form method="POST" action="/edit">
              <button type="submit" class="btn btn-outline-danger">Edit</button></form></td>
              <td>
                <form method="POST" action="/${userId}/delete">
                <input type="hidden" name="type" value="movie" />
                <input type="hidden" name="movie-id" value="${bookId}" />
                  <button type="submit" class="btn btn-outline-danger">Delete</button>
                </form></td>
            </td>
        </tr>
    </div>
    <table>
    `;

    const $item = $('.movie-items').prepend($markup);
    return $item;
  }
});
