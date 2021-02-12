$(() => {
  //-- Plugin for dayjs ---//
  dayjs.extend(window.dayjs_plugin_relativeTime);

  const userURL = window.location.pathname;
  const userId = userURL.slice(1);

  const loadBooks = () => {
    $.ajax({
      method: "GET",
      url: `/books/${userId}`,
    })
      .then((result) => {
        renderList(result.books);

        //counter
        const bookCount = $(".book-items table.item").length;
        $(".reading").click(() => {
          if (!bookCount) {
            $(".book-counter").effect("shake", { times: 3, distance: 10 }, 300);
          }
        });

        if (bookCount === 1) {
          $(".book-counter").text(bookCount + " BOOK");
        } else {
          $(".book-counter").text(bookCount + " BOOKS");
        }
      })
      .catch((err) => {
        console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
      });
  };

  loadBooks();

  // function to render items
  const renderList = (items) => {
    for (item of items) {
      generateNewElement(item);
    }
  };

// function to render options to read and select into your list



  // function to create new items and push them into the list
  const generateNewElement = (obj) => {
    const name = obj.name;
    const date = new Date(obj.date_added).toISOString();
    const dateAdded = dayjs(date).fromNow();
    const itemId = obj.id;

    const $markup = `
    <table class="item" data-type="books" data-itemId="${itemId}">
    <div>
        <tr>
            <td class="title-td">
              <b class="name-b">${name}</b>
              <div class="date-td">Added: ${dateAdded}</div>
            </td>
            <td><button class="btn btn-outline-danger edit">Edit</button></td>
            <td><button class="btn btn-outline-danger delete">X</button></td>

        </tr>
    </div>
    <table>
      `;

    const $item = $(".book-items").prepend($markup);
    return $item;
  };
});

module.exports = { loadBooks };
