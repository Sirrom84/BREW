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


  // function to render items
  const renderList = (items) => {
    for (item of items) {
      generateNewElement(item);
    }
  };

  // function to create new items and push them into the list
  const generateNewElement = (obj) => {
    const name = obj.name;
    const date = new Date(obj.date_added).toISOString();
    const dateAdded = dayjs(date).fromNow();
    const movieId = obj.id;

    const $markup = `
    <table class="item" data-type="movies" data-itemId="${movieId}">
    <div>
        <tr>
            <td class="title-td">
              <b>${name}</b>
              <div class="date-td">Added: ${dateAdded}</div>
              <td><button class="edit"><i class="uil uil-pen"></i></i></button></td>
            <td><button class="delete"><i class="uil uil-minus-circle"></i></button></td>
            </td>
        </tr>
    </div>
    <table>
    `;

    const $item = $('.movie-items').prepend($markup);
    return $item;
  }
});
