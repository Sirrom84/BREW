$(() => {
   //-- Plugin for dayjs ---//
   dayjs.extend(window.dayjs_plugin_relativeTime);

  //fetching BOOKS information from the db (currently for user_id: 1)

  const userURL = window.location.pathname
  const userId = userURL[1];

  $(function()  {
    $.ajax({
      method: "GET",
      url: `/products/${userId}`
    })
    .then((result) => {
      renderBookList(result.products);
    })
    .catch((err) => {
      console.log("AJAX ERROR CAUGHT RENDER BOOKS", err);
    })
  });

  // button to display items in a list
  $('.product-button').click(function (event) {
    if ($('.product-items').is(":visible")) {
      $('.product-items').slideUp();
    } else {
      $('.product-items').slideDown();
    }
  });

    // function to render items
    function renderBookList(items) {
      // $('.product-items').empty();
      for (item of items) {
        generateNewElement(item);
      }
    };

    // function to create new items and push them into the list
    const generateNewElement = function(obj) {
      const name = obj.name;
      const date = new Date(obj.date_added).toISOString();
      const dateAdded = dayjs(date).fromNow();
      const author = obj.author;

      const $markup = `
      <table class="item">
      <tbody>
          <tr>
              <td><input type="checkbox" name="" value=""></td>
              <td class="title-td"><b>${name}</b></td>
              <td class="date-td">Added: ${dateAdded}</td>
          </tr>
      </tbody>
      <table>
      `;

      const $item = $('.product-items').prepend($markup);
      console.log("THIS IS THE ITEM from generate new element:", $item)
      return $item;
    }
  });

