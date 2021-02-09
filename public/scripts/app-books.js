$(() => {

   //-- Plugin for dayjs ---//
   dayjs.extend(window.dayjs_plugin_relativeTime);

  //fetching BOOKS information from the db (currently for user_id: 1)

  const userURL = window.location.pathname;
  const userId = userURL[1];

  $(function()  {
    $.ajax({
      method: "GET",
      url: `/books/${userId}`
    })
    .then((result) => {
      console.log(result.books)
      renderBookList(result.books);
    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
    })
  });


  // button to display items in a list
  $('.books-button').click(function (event) {
    if ($('.book-items').is(":visible")) {
      $('.book-items').slideUp();
    } else {
      $('.book-items').slideDown();
    }
  });

    // function to render items
    function renderBookList(items) {
      // $('.all-items').empty();
      for (item of items) {
        generateNewElement(item);
      }
    };

    // function to create new items and push them into the list
    const generateNewElement = function(obj) {
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
              <td class="author-td">${author}</td>
              <td class="date-td">Added: ${dateAdded}</td>
          </tr>
      </tbody>
      <table>
      `;

      const $item = $('.book-items').prepend($markup);
      return $item;
    }




  });

